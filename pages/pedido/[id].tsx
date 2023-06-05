import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Navbar from "../../src/lib/components/navbar/navbar"

export default function Pedido(props: any) {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Navbar>

                <h1> página de pedido por ID: {id}</h1>
            </Navbar>
        </>
    )
}