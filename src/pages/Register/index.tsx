import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

type DataProps = {
    name: string;
    email: string;
    password: string;
    file: string;
};

export function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataProps>();
    const onSubmit: SubmitHandler<DataProps> = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <span>Cadastro</span>
                <input {...register("name")} placeholder="Nome e sobrenome" />
                <input {...register("email")} placeholder="Email" />
                <input {...register("password")} placeholder="Senha" />
                <input {...register("file")} type={"file"} id="file" />
                <label htmlFor="file">
                    <MdOutlineAddPhotoAlternate size={40} />
                    <span>Adicionar foto de perfil</span>
                </label>
                <button type="submit">Cadastrar</button>
                <p>
                    Já é cadastrado? Faça <Link to="/">Login</Link>
                </p>
            </Form>
        </Container>
    );
}
