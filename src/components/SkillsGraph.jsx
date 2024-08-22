import { useState } from "react";
import * as d3 from "d3";
import { useEffect } from "react";

export const SkillGraph = () => {
  const [formData, setFormData] = useState(null);

  const getFormData = () => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  };

  useEffect(() => {
    const data = getFormData();
    setFormData(data);
  }, []);

  if (!formData || !Array.isArray(formData.skills)) {
    return <p>No data available to display the graph.</p>;
  }

  const hierarchy = d3
    .hierarchy({ children: formData.skills })
    .sum((d) => d.experience)
    .sort((a, b) => b.experience - a.experience);

  const packGenerator = d3.pack().size([500, 600]).padding(10);
  const root = packGenerator(hierarchy);

  const generateRandomColor = () => {
    const letters = "ABCDEF01234";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 11)];
    }
    return color;
  };
  return (
    <svg width={600} height={600} style={{ display: "inline-block" }}>
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <circle
            key={node.data.label} // Using node.data since d3.hierarchy wraps the original data
            cx={node.x}
            cy={node.y}
            r={node.r}
            strokeWidth={2}
            fill={generateRandomColor()}
            fillOpacity={0.6}
          />
        ))}
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <text
            key={node.data.label}
            x={node.x}
            y={node.y}
            fontSize={13}
            fontWeight={0.9}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {node.data.label}
          </text>
        ))}
    </svg>
  );
};
