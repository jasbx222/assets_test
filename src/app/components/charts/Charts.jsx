"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FunBarChart = () => {
  const data = [
    { name: 'السيارات', uv: 4000, pv: 30000 },
    { name: 'الاثاث', uv: 3000, pv: 1398 },
    { name: 'الكرافانات', uv: 2000, pv: 9800 },
    { name: 'ادوات منزلية', uv: 2780, pv: 20000 },
  ];

  return (
    <div className="w-full h-[300px] bg-[#F5F7FA] relative top-12 border border-[#C9D3DF] rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-[#1F3557] mb-4 text-center">
        إحصائيات الجرودات الشهرية
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0177FB" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#0177FB" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#41BC4C" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#41BC4C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fill: '#1F3557' }} />
          <YAxis tick={{ fill: '#1F3557' }} />
          <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #C9D3DF',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#1F3557',
            }}
          />
          <Bar dataKey="uv" fill="url(#colorUv)" barSize={30} />
          <Bar dataKey="pv" fill="url(#colorPv)" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunBarChart;
