// https://github.com/apexcharts/react-apexcharts/issues/240
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

import Chart from 'react-apexcharts';


export default function GraphicBar() {
    const state = {
        options: {
            chart: {
                id: 'Pedidos nos ultimos meses'
            },
            xaxis: {
                categories: [
                    'Jan',
                    'Fev',
                    'Mar',
                    'Abr',
                    'Mai',
                    'Jun',
                    'Jul',
                    'Ago',
                    'Set',
                    'Out',
                    'Nov',
                    'Dez'
                ]
            }
        },
        series: [{
            name: 'pedidos',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 111, 90]
        }]
    };


    return (
        <>
            <ApexCharts
                options={state.options}
                series={state.series}
                type="bar"
                width={500}
                height={320} />
        </>
    );
}
