import React from 'react';
import {  LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid } from 'recharts';


const Statistics = () => {
    const data = [
        {
          name: "React",
          total: 8,
        },
        {
          name: "JavaScript",
          total: 9,
        },
        {
          name: "CSS",
          total: 8,
        },
        {
          name: "GitHub",
          total: 11,
        },
      ];
    return (
        <div className="m-0 bg-blue-600 p-0">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={400} data={data}>
          <Line type="monotone" dataKey="total" stroke="#fff" />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
};

export default Statistics;