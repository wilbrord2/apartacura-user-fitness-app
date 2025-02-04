import React, { useEffect, useState } from "react";

interface User {
  name: string;
  steps: number;
  rank: number;
}
const Badge = [
  "All",
  "Diamond 🏆",
  "Gold 🥇",
  "Silver 🥈",
  "Bronze 🥉",
  "No Badge",
];

function Leaderboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [selectedBadge, setSelectedBadge] = useState("All");

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const getBadge = (rank: number) => {
    if (rank === 1) return "Diamond 🏆";
    if (rank === 2) return "Gold 🥇";
    if (rank === 3) return "Silver 🥈";
    if (rank === 4) return "Bronze 🥉";
    return "No Badge";
  };

  const filterByBadge = (badge: string) => {
    setSelectedBadge(badge);
    if (badge === "All") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter((user) => getBadge(user.rank) === badge));
    }
    setCurrentPage(1);
  };

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center ">🏅 Leaderboard 🏅</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {Badge.map((badge) => (
          <button
            key={badge}
            onClick={() => filterByBadge(badge)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              selectedBadge === badge
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition duration-200`}
          >
            {badge}
          </button>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Steps</th>
              <th className="border border-gray-300 px-4 py-2">Badge</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr
                key={index}
                className="odd:bg-gray-100 even:bg-white text-center"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.steps.toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {getBadge(user.rank)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-700"
          } transition duration-200`}
        >
          Previous
        </button>
        <span className="font-bold">Page {currentPage}</span>
        <button
          disabled={
            currentPage >= Math.ceil(filteredUsers.length / usersPerPage)
          }
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            currentPage >= Math.ceil(filteredUsers.length / usersPerPage)
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-700"
          } transition duration-200`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
