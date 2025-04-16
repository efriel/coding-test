import React from 'react';
import { useState } from "react";

export default function SalesCards({ salesReps, loading }) {
  const [sortKey, setSortKey] = useState("name"); // Default sorting by name

  const handleSortChange = (e) => {
    setSortKey(e.target.value);
  };

  const sortedSalesReps = [...salesReps].sort((a, b) => {
    if (sortKey === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortKey === "role") {
      return a.role.localeCompare(b.role);
    } else if (sortKey === "region") {
      return a.region.localeCompare(b.region);
    }
    return 0;
  });

  return (
    <>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="p-6 bg-gradient-to-b from-[#0f0f0f] to-[#111111] rounded-2xl shadow-xl space-y-6">
          {/* Sorting Dropdown */}
          <div className="mb-4 grid justify-items-start">
            <label htmlFor="sort" className="text-gray-400 mr-2 text-sm pb-1.5">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortKey}
              onChange={handleSortChange}
              className="bg-gray-800 text-white p-2 rounded-md"
            >
              <option value="name">Name</option>
              <option value="role">Role</option>
              <option value="region">Region</option>
            </select>
          </div>

          {/* Sales Representatives Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {sortedSalesReps.map((rep, index) => (
              <div
                key={index}
                className="border border-gray-800 bg-[linear-gradient(to_bottom,_#0f0f0f,_#111111)] p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-white">{rep.name}</h2>
                <p className="text-xs text-gray-200 mb-2">
                  {rep.role} | {rep.region}
                </p>

                <div className="mb-2">
                  <strong className="text-gray-50">Skills:</strong>
                  <ul className="list-disc list-inside text-xs text-gray-200">
                    {rep.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-2">
                  <strong className="text-gray-50">Deals:</strong>
                  <ul className="text-xs text-gray-200">
                    {rep.deals.map((deal, i) => (
                      <li key={i}>
                        {deal.client} – ${deal.value.toLocaleString()} ({deal.status})
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong className="text-gray-50">Clients:</strong>
                  <ul className="text-xs text-gray-200">
                    {rep.clients.map((client, i) => (
                      <li key={i}>
                        {client.name} ({client.industry}){" "}
                        <a
                          href={`mailto:${client.contact}`}
                          className="text-violet-300 hover:underline"
                        >
                          {client.contact}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}