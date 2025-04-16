export default function SalesCards({ salesReps, loading }) {
  return (
    <>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {salesReps.map((rep, index) => (
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
      )}
    </>
  );
}