import React from 'react';
import MyChartOne from '../MyCartOne/MyChartOne';
import MyChartTwo from '../MyChartTwo/MyChartTwo';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-5xl font-semibold text-center'>Dashboard</h1>
            <div className='flex justify-around mt-10'>
                <MyChartOne></MyChartOne>
                <MyChartTwo></MyChartTwo>
            </div>
        </div>
    );
};

export default Dashboard;