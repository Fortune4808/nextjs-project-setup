"use client";
import dynamic from "next/dynamic";

const LineChart = dynamic(() => import('@/components/chart').then(mod => mod.LineChart), { ssr: false });

const ChartWrapper = () => {
    return (
        <div>
            <LineChart />
        </div>
    )
}

export default ChartWrapper
