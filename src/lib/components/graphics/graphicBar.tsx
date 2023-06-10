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
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width={500}
                height={320} />
        </>
    );
}
