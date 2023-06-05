import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    height: 15vh;
    width: 20vw;
    border-radius: 10px;
    box-shadow: 3px 3px 5px gray
`
export const ButtonLink = styled.button`
    border: none;
    border-radius: 10px;
    margin: 50px;
`
export default function Cards() {
    return (
        <>
            <Wrapper>
                <ButtonLink style={{ border: 'none' }}>
                    <Link style={{ textDecoration: "none", color: "white" }} href={'/pedidos'}>
                        <Card style={{ backgroundColor: '#bb92fc' }}>
                            <div>
                                Pedidos Entregues
                            </div>
                            <div>
                                5
                            </div>
                        </Card>
                    </Link>
                </ButtonLink>
                <ButtonLink style={{ border: 'none' }}>
                    <Link style={{ textDecoration: "none", color: "white" }} href={'/pedidos'}>
                        <Card style={{ backgroundColor: '#fc9292' }}>
                            <div>
                                Pedidos Pendentes
                            </div>
                            <div>
                                5
                            </div>
                        </Card>
                    </Link>
                </ButtonLink>
                <ButtonLink style={{ border: 'none' }}>
                    <Link style={{ textDecoration: "none", color: "black" }} href={'/pedidos'}>
                        <Card style={{ backgroundColor: '#6dff85' }}>
                            <div>
                                Total de pedidos
                            </div>
                            <div>
                                5
                            </div>
                        </Card>
                    </Link>
                </ButtonLink>

            </Wrapper>
        </>
    )
}