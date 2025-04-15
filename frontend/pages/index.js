import { useState, useEffect } from "react";
import QuestionForm from "../components/QuestionForm";
import UserList from "../components/UserList";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/data")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-4">Next.js + FastAPI Sample</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Dummy Data</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <UserList users={users} />
        )}
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Ask a Question (AI Endpoint)</h2>
        <QuestionForm />
      </section>
    </div>
  );
}
