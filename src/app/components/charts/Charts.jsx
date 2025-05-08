'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FunAreaChart = () => {
    const data = [
        { name: 'السيارات', uv: 4000, pv: 30000 },
        { name: 'الاثاث', uv: 3000, pv: 1398 },
        { name: 'الكرافانات', uv: 2000, pv: 9800 },
        { name: 'اداوات منزلية', uv: 2780, pv: 20000 },
      
      ];
      
  return (
    <div className="w-full h-[300px]   relative top-12 bg-[#424242] shadow-md rounded-xl p-4">
      <h2 className="text-xl font-bold text-[#000] mb-4 text-center">📈 جرودات شهرية</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="4 4" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              borderColor: '#fff',
              borderRadius: '0.5rem',
            }}
          />
          <Area type="monotone" dataKey="uv" stroke="#000" fill="#000" />
          <Area type="monotone" dataKey="pv" stroke="#000" fill="#000" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunAreaChart;
