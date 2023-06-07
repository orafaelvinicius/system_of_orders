import Graphic from "../src/lib/components/graphics/graphic"
import Navbar from "../src/blocks/navbar/navbar"

export default function Indicator() {

    return (
        <>
            <Navbar>
                <h1>Quantidade de pedidos</h1>
                <Graphic />
            </Navbar>
        </>
    )
}

