import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyChartOne = () => {
    const [selling, setSelling] = useState([]);
    useEffect(() => {
        fetch('myChartOne.json')
            .then(res => res.json())
            .then(data => setSelling(data))
    }, [])

    console.log(selling);
    return (
        <LineChart width={700} height={400} data={selling}>
            <Line type="monotone" dataKey="investment" stroke="orange" />
            <Line type="monotone" dataKey="sell" stroke="red" />
            <Line type="monotone" dataKey="revenue" stroke="green" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default MyChartOne;