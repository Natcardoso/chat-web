import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Container, Form, Logo, MsgErroLogin } from "./styles";
import { BsChatDots } from "react-icons/bs";
import { Loading } from "../../components/Loading";
import { AuthContext } from "../../Context/authContext";

type DataProps = {
    email: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const [err, setErr] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { setUserActive } = useContext(AuthContext);

    const { register, handleSubmit } = useForm<DataProps>();
    const onSubmit: SubmitHandler<DataProps> = async (data) => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate("/chat-web");
            setUserActive(`${auth.currentUser?.uid}`);
        } catch (err) {
            setErr(true);
        }
        setLoading(false);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Logo>
                            <BsChatDots size={25} />
                            <span>ChatWeb</span>
                        </Logo>
                        <span>Entrar</span>
                        {err && (
                            <MsgErroLogin>
                                <div>
                                    O email ou senha não correspondem ás
                                    informações em nossos registros. Tente
                                    novamente.
                                </div>
                            </MsgErroLogin>
                        )}
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Senha"
                        />

                        <button type="submit">Entrar</button>
                        <p>
                            Ainda não possue um cadastro? Faça seu
                            <Link to="/register"> Cadastro</Link> aqui!
                        </p>
                    </>
                )}
            </Form>
        </Container>
    );
}
