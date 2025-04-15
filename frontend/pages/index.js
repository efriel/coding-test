import { useState, useEffect } from "react";
import QuestionForm from "../components/QuestionForm";
import UserList from "../components/UserList";
import SalesCards from "../components/SalesCards"; // Import the new component

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [salesReps, setSalesReps] = useState([]);
  const [loadingSalesReps, setLoadingSalesReps] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/sales-reps")
      .then((res) => res.json())
      .then((data) => {
        setSalesReps(data.salesReps || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch sales reps:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-tr bg-[radial-gradient(circle,_#050204,_#1c0a17)] font-sans">
      <main className="flex-1 p-10">
        <h1 className="text-4xl text-center mb-4 font-extrabold text-transparent bg-clip-text bg-[radial-gradient(circle,_#dd519a,_#b34bf0)]">
          InterOpera AI
        </h1>

        <section className="mb-8 p-4">
        {/* Use the SalesCards component */}
        <SalesCards salesReps={salesReps} loading={loading} />
        </section>

        <section className="mb-8 p-4">
          <h2 className="text-3xl font-bold text-center text-violet-300 mb-4">
            Ask a Question (AI Endpoint)
          </h2>
          <QuestionForm />
        </section>
        
      </main>
    </div>
  );
}
