// https://github.com/apexcharts/react-apexcharts/issues/240
import { Box } from '@mui/material';
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
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <Box style={{ margin: '10px' }}>
                    <span>Gráfico de Barra</span>
                    <ApexCharts
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width={500}
                        height={320}
                    />
                </Box>
                <Box style={{ margin: '10px' }}>

                    <span>Gráfico de Área</span>
                    <ApexCharts
                        options={state.options}
                        series={state.series}
                        type="area"
                        width={500}
                        height={320}
                    />
                </Box>
                <Box style={{ margin: '10px' }}>

                    <span>Gráfico de Linha</span>
                    <ApexCharts
                        options={state.options}
                        series={state.series}
                        type="line"
                        width={500}
                        height={320}
                    />
                </Box>
                <Box style={{ margin: '10px' }}>

                    <span>Gráfico de Nó</span>
                    <ApexCharts
                        options={state.options}
                        series={state.series}
                        type="pie"
                        width={500}
                        height={320}
                    />
                </Box>

                <Box style={{ margin: '10px' }}>

                    <span>Gráfico de Rosca</span>
                    <ApexCharts
                        options={state.options}
                        series={state.series}
                        type="donut"
                        width={500}
                        height={320}
                    />
                </Box>

                <Box style={{ margin: '10px' }}>

                    <span>Gráfico de Bolha</span>
                    <ApexCharts
                        options={state.options}
                        series={state.series}
                        type="bubble"
                        width={500}
                        height={320}
                    />

                </Box>
                <Box style={{ margin: '10px' }}>

                    <span>Gráfico Mapa de calor</span>
                    <ApexCharts
                        options={state.options}
                        series={state.series}
                        type="heatmap"
                        width={500}
                        height={320}
                    />
                </Box>
                <Box style={{ margin: '10px' }}>

                    <span>Gráfico de barra circular</span>
                    <ApexCharts
                        options={state.options}
                        series={state.series}
                        type="radialBar"
                        width={500}
                        height={320}
                    />
                </Box>

            </Box>
        </>
    );
}


