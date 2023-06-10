import { Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from "styled-components";
import { useState } from "react";


type Inputs = {
    nome?: string,
    telefone?: string,
    produto?: string,
    categoria?: string,
    status?: string,
};

// Validação de dados
const validationOrder = yup.object({
    nome: yup.string().required('Insira o nome do pedido'),
    telefone: yup.number(),
    produto: yup.string(),
    categoria: yup.string(),
    status: yup.string(),
});

// Dados para teste
const pedido = {
    nome: 'Pedido 1',
    telefone: '84998476097',
    produto: 'Torneira',
    categoria: 'Hidraulica',
    status: 'Entregue',
}
const categoryInfo = [
    { id: 0, name: '' },
    { id: 1, name: 'Hidraulica' },
    { id: 2, name: 'Eletrica' },
    { id: 3, name: 'Alvenaria' }
]
const statusInfo = [
    { id: 1, name: 'Entregue' },
    { id: 2, name: 'Pedido' },
    { id: 3, name: 'Em andamento' }
]

export default function NovoPedido() {

    const [category, setCategory] = useState(categoryInfo)
    const [status, setStatus] = useState(statusInfo)

    const preloadValue = {
        nome: pedido.nome || '',
        telefone: pedido.telefone || '',
        produto: pedido.produto || '',
        categoria: pedido.categoria || '',
        status: pedido.status || '',

    };
    const {
        register,
        watch,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(validationOrder),
        defaultValues: preloadValue,
        mode: 'onChange',
    });
    const formData = watch();
    console.log({ formData })

    const onSubmit: SubmitHandler<Inputs> = data => console.log({ dataform: data });


    const handleChangeCategory = (event: any) => {
        console.log(event.target.value);
        setValue('categoria', event.target.value);
    };
    const handleChangeStatus = (event: any) => {
        console.log(event.target.value);
        setValue('status', event.target.value);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BoxForm >
                <BoxInput>
                    <label>Nome:</label>
                    <Input placeholder="Cliente" {...register("nome", { required: true })} />
                    {errors.nome && <span>Digite o nome do cliente</span>}
                </BoxInput>
                <BoxInput>
                    <label>Telefone:</label>
                    <Input placeholder="ex: 84988887777" {...register("telefone")} />
                    {errors.telefone && <span>Digite o telefone do cliente</span>}
                </BoxInput>
                <BoxInput>
                    <label>Produto:</label>
                    <Input placeholder="ex: Torneira" {...register("produto")} />
                    {errors.produto && <span>Digite o produto do pedido</span>}
                </BoxInput>
                <BoxInput>
                    <label>Categoria:</label>
                    <InputSelect name="Categoria" onChange={handleChangeCategory}>
                        {category.map((opt: any) => {
                            return <option key={opt.id} value={opt.name}>{opt.name}</option>
                        })}
                    </InputSelect>
                </BoxInput>
                <BoxInput>
                    <label>Status:</label>
                    <InputSelect name="Status" onChange={handleChangeStatus}>
                        {status.map((opt: any) => {
                            return <option key={opt.id} value={opt.name}>{opt.name}</option>
                        })}
                    </InputSelect>
                </BoxInput>

                <Button type="submit" variant="contained" style={{ margin: '20px' }} >Enviar</Button>

            </BoxForm>

        </form>
    );
}

const BoxForm = styled.div`
    display: flex;
    flex-direction: column;
    width:300px;
    margin: 10px;
    justify-content: center;
    align-items: center;
`
const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    width:300px;
    justify-content: center;
    align-items: start;
    margin-top: 10px;
`

const Input = styled.input`
    width:300px;
    height: 30px;
    border-radius: 5px;
`

const InputSelect = styled.select`
    width:300px;
    height: 30px;
    border-radius: 5px;
`


