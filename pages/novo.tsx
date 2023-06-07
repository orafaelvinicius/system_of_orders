import { Box, width } from "@mui/system";
import Navbar from "../src/blocks/navbar/navbar";
import NovoPedido from "../src/lib/components/form/newOrder";

export default function NewOrder() {
    return (
        <>
            <Navbar>
                <h1>FORMULARIO DE CRIAÇÃO DE PEDIDOS</h1>
                <Box id='Box-Form-page' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '70vh'
                }}>
                    <NovoPedido />
                </Box>
            </Navbar>
        </>
    )
}