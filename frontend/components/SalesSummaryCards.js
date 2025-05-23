import React from 'react';
import { useState, useEffect } from "react";
import { Sparkles, Users, Briefcase, Building, DollarSign } from "lucide-react";
import TotalSummaryChart from "./TotalSummaryChart";

export default function SalesSummaryCards({ summary, loading, onFilterChange }) {
  const [filters, setFilters] = useState({ region: "", role: "", status: "" });
  const [isLoading, setIsLoading] = useState(loading); // Local loading state

  useEffect(() => {
    setIsLoading(loading); // Sync local loading state with the parent component's loading prop
  }, [loading]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    setIsLoading(true); // Set loading state when filters are applied
    onFilterChange(updatedFilters); // Trigger the parent filter change handler
  };

  const filterOptions = [
    {
      label: "Region",
      name: "region",
      values: summary?.regions || [],
    },
    {
      label: "Role",
      name: "role",
      values: summary?.roles || [],
    },
    {
      label: "Status",
      name: "status",
      values: Object.keys(summary?.statusBreakdown || {}),
    },
  ];

  const totalSummary = [
    {
      title: "Total Sales Reps",
      value: summary?.totalSalesReps || 0,
      icon: Users,
    },
    {
      title: "Total Deals",
      value: summary?.totalDeals || 0,
      icon: Briefcase,
    },
    {
      title: "Total Clients",
      value: summary?.totalClients || 0,
      icon: Building,
    },
    {
      title: "Total Revenue",
      value: `$${summary?.totalValue?.toLocaleString() || 0}`,
      icon: DollarSign,
    },
  ];

  const totalSummaryExcludeRevenue = totalSummary.filter(
    (item) => item.title !== "Total Revenue"
  );

  return (
    <div className="p-6 bg-gradient-to-b from-[#0f0f0f] to-[#111111] rounded-2xl shadow-xl space-y-6 ">
    {/* Filter Section */}
    {summary ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-8 mb-4">
            {filterOptions.map(({ label, name, values }) => (
            <div key={name}>
                <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
                <select
                name={name}
                value={filters[name]}
                onChange={handleFilterChange}
                className="w-full bg-gray-800 text-white p-2.5 rounded-xl focus:ring-2 focus:ring-violet-500 transition duration-150"
                >
                <option value="">All {label}s</option>
                {values.map((val, idx) => (
                    <option key={idx} value={val}>
                    {val}
                    </option>
                ))}
                </select>
            </div>
            ))}
        </div>
    ) : null}
      {/* Summary Cards */}
      {isLoading || !summary ? (
        <div className="text-center text-gray-400 animate-pulse py-12">
          <Sparkles className="mx-auto mb-3 animate-spin text-violet-500" size={32} />
          Loading insights...
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[#0f0f0f] to-[#111111] rounded-2xl shadow-xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 bg-[linear-gradient(to_bottom,_#0f0f0f,_#111111)]">
            {totalSummary.map(({ title, value, icon: Icon }, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-800 hover:bg-gray-900 transition-all duration-200 shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-2 right-3 opacity-10 group-hover:opacity-20 transition">
                  <Icon size={64} className="text-gray-200" />
                </div>
                <h4 className="text-white text-sm font-semibold mb-1">{title}</h4>
                <p className="text-3xl font-bold text-violet-400 z-10 relative">{value}</p>
              </div>
            ))}
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-7 mt-6 h-[50%]">
            <TotalSummaryChart data={totalSummaryExcludeRevenue} statusBreakdown={summary?.statusBreakdown} />
            <BreakdownCard title="Roles" list={summary.roles} />
            <BreakdownCard title="Regions" list={summary.regions} />
            <BreakdownCard title="Industries" list={summary.industries} />
            <BreakdownCard title="Unique Skills" list={summary.uniqueSkills} />
            <BreakdownCard title="Status Breakdown" list={Object.entries(summary.statusBreakdown)} isKeyValue />
          </div>
        </div>
      )}
    </div>
  );
}

function BreakdownCard({ title, list, isKeyValue = false }) {
  return (
    <div className="p-5 rounded-2xl border border-gray-800 hover:bg-gray-900 transition-all duration-200 shadow-lg max-h-[80%] overflow-auto scrollbar-hide">
      <h4 className="text-white text-sm font-semibold mb-3">{title}</h4>
      <ul className="text-sm text-gray-300 space-y-1 overflow-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600">
        {isKeyValue
          ? list.map(([key, value], i) => (
              <li key={i} className="flex justify-between">
                <span>{key}</span> 
                <span className="font-semibold text-violet-300">{value}</span>
              </li>
            ))
          : list.map((item, i) => <li key={i}>• {item}</li>)}
      </ul>
    </div>
  );
}
