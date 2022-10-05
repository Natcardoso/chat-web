import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Container, Form, MsgErroLogin } from "./styles";

type DataProps = {
    email: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataProps>();
    const onSubmit: SubmitHandler<DataProps> = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                navigate("/");
            })
            .catch((_error) => {
                setError(true);
            });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <span>Entrar</span>
                {error && (
                    <MsgErroLogin>
                        <div>
                            O email ou senha não correspondem ás informações em
                            nossos registros. Tente novamente.
                        </div>
                    </MsgErroLogin>
                )}
                <input {...register("email")} placeholder="Email" />
                <input {...register("password")} placeholder="Senha" />

                <button type="submit">Entrar</button>
                <p>
                    Ainda não possue um cadastro? Faça seu
                    <Link to="/register"> Cadastro</Link> aqui!
                </p>
            </Form>
        </Container>
    );
}
