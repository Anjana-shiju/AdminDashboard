import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

/* Image-ile pole blue shade colors */
const data = [
  { name: 'Jul 2024', pg: 25000, rental: 50000, buying: 30000 },
  { name: 'Aug 2024', pg: 30000, rental: 60000, buying: 35000 },
  { name: 'Sep 2024', pg: 35000, rental: 55000, buying: 32000 },
  { name: 'Oct 2024', pg: 32000, rental: 65000, buying: 45000 },
  { name: 'Nov 2024', pg: 40000, rental: 75000, buying: 50000 },
  { name: 'Dec 2024', pg: 45000, rental: 80000, buying: 70000 },
];

const RevenueChart = () => {
  return (
    /* Card design removing extra padding to fit DashboardPage container */
    <div className="w-100 h-100">
      <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barGap={0}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              fontSize={10} 
              tick={{fill: '#999'}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              fontSize={10} 
              tick={{fill: '#999'}}
            />
            <Tooltip 
              cursor={{fill: '#f8f9fa'}} 
              contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Legend 
              verticalAlign="top" 
              align="center" 
              iconType="circle" 
              iconSize={8}
              wrapperStyle={{ paddingBottom: '20px', fontSize: '11px', fontWeight: 'bold' }} 
            />
            
            {/* Blue Shades as per */}
            <Bar 
              dataKey="pg" 
              stackId="a" 
              fill="#72e2e2"  /* Light Aqua */
              barSize={35} 
              name="PG" 
            />
            <Bar 
              dataKey="rental" 
              stackId="a" 
              fill="#40b4d4"  /* Medium Blue */
              name="Rental" 
            />
            <Bar 
              dataKey="buying" 
              stackId="a" 
              fill="#2e86ab"  /* Dark Ocean Blue */
              radius={[4, 4, 0, 0]} /* Slight round on top */
              name="Buying" 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;