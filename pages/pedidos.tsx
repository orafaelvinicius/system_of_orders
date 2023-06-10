import DataTable from "../src/lib/components/dataTable/dataTable"
import Navbar from "../src/blocks/navbar/navbar"
import Button from '@mui/material/Button';
import { Box } from "@mui/system"
import Link from "next/link"
import { TextField } from "@mui/material"

export default function AllOrders() {
    return (
        <>
            <Navbar>
                <h1>PÁGINA QUE LISTA TODOS OS PEDIDOS</h1>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '20px'
                }}>
                    <Link href='/novo'>
                        <Button variant="contained">Novo Pedido</Button>
                    </Link>
                    <Box>
                        <TextField
                            id="search-order"
                            label="Pesquisar um pedido"
                            variant="standard"
                        />

                    </Box>
                </Box>
                <DataTable />
            </Navbar>
        </>
    )
}