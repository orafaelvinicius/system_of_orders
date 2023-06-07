import DataTable from "../src/lib/components/dataTable/dataTable"
import Navbar from "../src/blocks/navbar/navbar"

export default function AllOrders() {
    return (
        <>
            <Navbar>
                <h1>PÁGINA QUE LISTA TDOS OS PEDIDOS</h1>
                <DataTable />
            </Navbar>
        </>
    )
}