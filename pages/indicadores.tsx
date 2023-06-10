import Navbar from "../src/blocks/navbar/navbar"
import { Box } from "@mui/system"
import GraphicBar from "../src/lib/components/graphics/graphicBar"

export default function Indicator() {

    return (
        <>
            <Navbar>
                <h1>Quantidade de pedidos</h1>
                <Box id='Box-indicator-page' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '70vh'
                }}>

                    <GraphicBar />
                </Box>
            </Navbar>
        </>
    )
}

