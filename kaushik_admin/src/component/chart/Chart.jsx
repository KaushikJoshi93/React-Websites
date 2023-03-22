import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react'

const Chart = ({aspect , title}) => {
  const data = [
    {name:"January" , total:4200},
    {name:"April" , total:1900},
    {name:"October" , total:7200},
    {name:"November" , total:3300},
    {name:"December" , total:9000},
  ];
  return (
    <div className='chart'>
      <div className="title">{title ? title : "Last 6 Months(Revenue)"}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke='gray'/>
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart