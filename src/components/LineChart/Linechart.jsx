// @ts-nocheck
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const Linechart = () => {
  const marksData = [
    { id: 1, name: "John Smith", math: 85, physics: 78, chemistry: 92 },
    { id: 2, name: "Sarah Jones", math: 78, physics: 85, chemistry: 89 },
    { id: 3, name: "Michael Lee", math: 92, physics: 88, chemistry: 90 },
    { id: 4, name: "Emily Davis", math: 88, physics: 90, chemistry: 86 },
    { id: 5, name: "James Brown", math: 76, physics: 82, chemistry: 78 },
    { id: 6, name: "Emma Wilson", math: 95, physics: 92, chemistry: 94 },
    { id: 7, name: "Olivia Clark", math: 70, physics: 76, chemistry: 72 },
    { id: 8, name: "Daniel White", math: 89, physics: 83, chemistry: 88 },
    { id: 9, name: "Sophia Hall", math: 82, physics: 79, chemistry: 84 },
    { id: 10, name: "Ethan Moore", math: 93, physics: 87, chemistry: 91 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={marksData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="math"></Line>
        <Line dataKey="physics" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default Linechart;
