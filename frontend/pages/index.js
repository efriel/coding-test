import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import QuestionForm from "../components/QuestionForm";
import ResponseCards from "../components/ResponseCards";
import SalesCards from "../components/SalesCards";
import SalesSummaryCards from "../components/SalesSummaryCards";
import ManageModelsCards from "../components/ManageModelsCards";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [salesReps, setSalesReps] = useState([]);
  const [loadingSalesReps, setLoadingSalesReps] = useState(true);
  const [salesSummary, setSalesSummary] = useState(null);
  const [loadingSummary, setLoadingSummary] = useState(true);
  const [hideContent, setHideContent] = useState(false);
  const [answer, setAnswer] = useState("");

  const fetchSalesSummary = (filters = {}) => {
    setLoadingSummary(true);

    const queryParams = new URLSearchParams(filters).toString();
    const url = `http://localhost:8000/api/sales-summary${queryParams ? `?${queryParams}` : ""}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSalesSummary(data || {});
        setLoadingSummary(false);
      })
      .catch((err) => {
        console.error("Failed to fetch sales summary:", err);
        setLoadingSummary(false);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/sales-reps")
      .then((res) => res.json())
      .then((data) => {
        setSalesReps(data.salesReps || []);
        setLoadingSalesReps(false);
      })
      .catch((err) => {
        console.error("Failed to fetch sales reps:", err);
        setLoadingSalesReps(false);
      });

    fetchSalesSummary();
  }, []);

  // Reset the answer and show content when activeMenu changes
  useEffect(() => {
    if (activeMenu) {
      setAnswer(""); // Clear the answer
      setHideContent(false); // Show the main content
    }
  }, [activeMenu]);

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return (
          <SalesSummaryCards
            summary={salesSummary}
            loading={loadingSummary}
            onFilterChange={fetchSalesSummary}
          />
        );
      case "Sales Representative":
        return <SalesCards salesReps={salesReps} loading={loadingSalesReps} />;
      case "Manage Models":
        return <ManageModelsCards />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-tr bg-[radial-gradient(circle,_#050204,_#1c0a17)] font-sans">
      <Sidebar onMenuClick={setActiveMenu} />
      <main className="flex-1 p-10 flex flex-col min-h-screen">
        <h1 className="text-3xl text-center mb-4 font-extrabold text-transparent bg-clip-text bg-[radial-gradient(circle,_#dd519a,_#b34bf0)]">
          Insight-Driven Sales Excellence
        </h1>

        {/* Render ResponseCards if answer is set */}
        {answer && <ResponseCards answer={answer} />}

        {/* Render main content if hideContent is false */}
        {!hideContent && renderContent()}

        <section className="mt-auto p-4">
          <h2 className="text-xl font-bold text-center text-violet-400 mb-4">
            Ask a Question (AI Endpoint)
          </h2>
          <QuestionForm setHideContent={setHideContent} setAnswer={setAnswer} />
        </section>
      </main>
    </div>
  );
}
