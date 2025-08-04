import React from "react";

const dummyLeaderboard = [
  { rank: 1, name: "Vimal Negi", cuponCode: "vimal2025", donations: 2500 },
  { rank: 2, name: "Anita Patel", cuponCode: "anita2025", donations: 1800 },
  { rank: 3, name: "Ravi Kumar", cuponCode: "ravi2025", donations: 1500 },
  { rank: 4, name: "Sara Lee", cuponCode: "sara2025", donations: 1200 },
  { rank: 5, name: "David Wang", cuponCode: "david2025", donations: 900 },
];

function rankEmoji(rank) {
  switch(rank) {
    case 1: return "🥇"; // Gold medal
    case 2: return "🥈"; // Silver medal
    case 3: return "🥉"; // Bronze medal
    default: return "⭐";
  }
}

function Leaderboard() {
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-5xl mx-auto bg-base-100 shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary flex items-center justify-center gap-2">
          Intern Leaderboard <span className="text-4xl">🚀</span>
        </h1>

        <table className="table w-full">
          <thead>
            <tr className="bg-base-300 text-left">
              <th className="w-20">Rank</th>
              <th>Name</th>
              <th>Referral Code</th>
              <th className="text-right">Donations Raised</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyLeaderboard.map(({ rank, name, cuponCode, donations }) => (
              <tr
                key={rank}
                className={`hover:bg-base-200 transition-colors ${
                  rank <= 3 ? "bg-yellow-50" : ""
                }`}
              >
                <td className="text-xl">{rankEmoji(rank)} {rank}</td>
                <td className="font-semibold">{name} {rank === 1 && "🔥"}</td>
                <td className="font-mono text-blue-600 cursor-pointer select-text">{cuponCode}</td>
                <td className="text-right font-bold text-green-600">
                  ₹{donations.toLocaleString()} {donations > 2000 ? "💰" : donations > 1000 ? "🏆" : "👍"}
                </td>
                <td className="text-center">
                  {donations > 2000 && <span className="badge badge-success">Top Donor</span>}
                  {donations <= 2000 && donations > 1000 && <span className="badge badge-warning">Rising Star</span>}
                  {donations <= 1000 && <span className="badge badge-outline">Contributor</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
