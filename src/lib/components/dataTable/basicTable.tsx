import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    cliente: string,
    telefone: string,
    produto: string,
    data_do_pedido: string,
    status: string,
) {
    return { cliente, telefone, produto, data_do_pedido, status };
}

const rows = [
    createData('Giovani Loerte', '12 4040-8594', 'Chuveiro', 'Mai, 10, 2022', 'Pendente'),
    createData('Marcos Aurelio', '11 3844-6874', 'Torceira', 'Mai, 24, 2022', 'Pedido'),
    createData('Mariana Silva', '41 6093-9000', 'Aquecedor', 'Jan, 5, 2022', 'Entregue'),
    createData('Louise Nobre', '11 3344-5667', 'Reparo de Torneira', 'Fev, 17, 2022', 'Entregue'),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold' }}>Cliente</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Telefone</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Produto</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Data do pedido</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.cliente}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.cliente}
                            </TableCell>
                            <TableCell align="right">{row.telefone}</TableCell>
                            <TableCell align="right">{row.produto}</TableCell>
                            <TableCell align="right">{row.data_do_pedido}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}