import React from "react";
import StatsItem from "./StatsItem";

const statData = [
  {
    label: "Classes",
    input: "54",
    options: ["Last 7 Days"],
  },
  {
    label: "Bookings",
    input: "2,254",
    options: ["Last 30 Days"],
  },
];

const CourseStats = () => {
  return (
    <div className="flex-start flex-row w-full mt-5">
      {statData.map((stat) => (
        <StatsItem
          key={stat.label}
          label={stat.label}
          input={stat.input}
          options={stat.options}
          isHome={false}
        />
      ))}
    </div>
  );
};

export default CourseStats;
