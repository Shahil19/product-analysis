import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyChartTwo = () => {
    const [selling, setSelling] = useState([]);
    useEffect(() => {
        fetch('myChartOne.json')
            .then(res => res.json())
            .then(data => setSelling(data))
    }, [])

    console.log(selling);
    return (
        <>
            <AreaChart
                width={500}
                height={400}
                data={selling}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </>
    );
};

export default MyChartTwo;