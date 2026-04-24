"use client";

import { useEffect, useState } from "react";
import { LeaderboardEntry } from "@/types";

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((r) => r.json())
      .then((data) => {
        setEntries(data.leaderboard);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getMedalColor = (rank: number) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-300 to-gray-500";
    if (rank === 3) return "from-orange-400 to-orange-600";
    return "from-purple-400 to-purple-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800/50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">لائحة الصدارة</h1>
        </div>

        {/* Top 3 */}
        {!loading && entries.length >= 3 && (
          <div className="flex items-end justify-center gap-4 mb-10">
            {[entries[1], entries[0], entries[2]].map((entry, i) => {
              const heights = ["h-32", "h-40", "h-28"];
              const sizes = ["text-2xl", "text-3xl", "text-2xl"];
              return (
                <div key={entry.rank} className="flex flex-col items-center">
                  <div className={`w-14 h-14 ${sizes[i]} rounded-full bg-gradient-to-br ${getMedalColor(entry.rank)} flex items-center justify-center text-white font-bold mb-2`}>
                    {entry.rank}
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{entry.name}</p>
                  <p className="text-xs text-purple-600 font-bold mb-2">{entry.score} نقطة</p>
                  <div className={`w-20 ${heights[i]} bg-gradient-to-t ${getMedalColor(entry.rank)} rounded-t-lg opacity-80`} />
                </div>
              );
            })}
          </div>
        )}

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {loading ? (
            <div className="p-8 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-14 bg-gray-100 dark:bg-gray-700 rounded animate-pulse" />
              ))}
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-600 dark:text-gray-300">المركز</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-600 dark:text-gray-300">الاسم</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-600 dark:text-gray-300">المادة</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-600 dark:text-gray-300">النقاط</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {entries.map((entry) => (
                  <tr key={entry.rank} className="hover:bg-purple-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white bg-gradient-to-br ${getMedalColor(entry.rank)}`}>
                        {entry.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-purple-100 dark:bg-gray-600 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-sm">
                          {entry.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">{entry.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{entry.subject}</td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-purple-600 dark:text-purple-400">{entry.score}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
