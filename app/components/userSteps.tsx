import { useEffect, useState } from "react";

export default function StepCount({name}:{name?:string| null}) {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    fetch("/api/steps")
      .then((res) => res.json())
      .then((data) => setSteps(data.steps));
  }, []);

  return (
    <div className="text-center text-lg flex flex-col gap-4 w-full items-center">
      <h2 className="text-2xl font-semibold text-gray-400">
       Dear {name} Your Steps Today are<span className="text-3xl">🚶</span>:{" "}
        <span className="font-bold text-black">{steps}</span>
      </h2>

      <p className="text-gray-700 max-w-lg text-sm">
        Keep moving! Every step brings you closer to your goal. Stay active and
        climb the leaderboard to earn exclusive badges! 🏆✨
      </p>
    </div>
  );
}
