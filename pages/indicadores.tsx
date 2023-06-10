import Navbar from "../src/blocks/navbar/navbar"
import { Box } from "@mui/system"

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

                    {/* <Graphic /> */}
                </Box>
            </Navbar>
        </>
    )
}

