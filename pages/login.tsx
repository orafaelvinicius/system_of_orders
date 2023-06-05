import { useRouter } from "next/router";
import { DivInput, FormLogin, Wrapper } from '../src/lib/components/login/style'
import { Button, TextField } from "@mui/material";
import bg from '../public/background-image.webp'

export default function Login() {
    const router = useRouter();



    return (
        <>
            <Wrapper id="wrapper-login" style={{
                backgroundImage: `url(${bg.src})`,
                width: '100vw',
                height: '100vh'
            }}>

                <FormLogin id="form-login" onSubmit={(e) => {
                    e.preventDefault();
                    router.push('/')
                }}>
                    <h1>Bem vindo!</h1>

                    <DivInput>
                        <TextField style={{ width: '300px' }} id="email" type="email" label="Digite seu email" variant="outlined" />
                    </DivInput>
                    <DivInput>
                        <TextField style={{ width: '300px' }} id="password" type="password" label="Senha" variant="outlined" />
                    </DivInput>
                    <DivInput style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ width: '300px' }} type="submit" variant="contained">Entrar</Button>
                    </DivInput>

                </FormLogin>
            </Wrapper>
        </>
    )
}