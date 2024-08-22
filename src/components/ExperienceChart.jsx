import React, { useEffect, useMemo, useState } from "react";
import Chart from "react-apexcharts";

const formatExperienceData = (data) => {
  if (!data) return [];
  return data.map((exp, index) => ({
    x: exp.company,
    y: [
      new Date(`${exp.startDate}-01`).getTime(),
      new Date(`${exp.endDate}-01`).getTime(),
    ],
    fillColor: (index + 1) % 2 === 0 ? "#FF5733" : "#33FF57",
  }));
};

const ExperienceChart = () => {
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

  const experiences = formData?.experiences || [];

  const formattedData = useMemo(
    () => formatExperienceData(experiences),
    [experiences]
  );

  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "rangeBar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
          borderRadius: 8,
          distributed: true,
        },
      },
      xaxis: {
        type: "datetime",
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        x: {
          format: "MMM yyyy",
        },
      },
      legend: {
        show: false,
      },
    }),
    []
  );

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="experience-chart">
      <Chart
        options={chartOptions}
        series={[{ data: formattedData }]}
        type="rangeBar"
        height={350}
      />
    </div>
  );
};

export default ExperienceChart;
