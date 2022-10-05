import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { MsgErroLogin } from "../Login/styles";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

type DataProps = {
    name: string;
    email: string;
    password: string;
    file: any;
};

export function Register() {
    const [err, setErr] = useState<boolean>(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataProps>();
    const onSubmit: SubmitHandler<DataProps> = async (data) => {
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            const storageRef = ref(storage, `images/${data.file[0].name}`);
            const uploadTask = uploadBytesResumable(storageRef, data.file[0]);

            uploadTask.on(
                "state_changed",
                (snapshot) => {},
                (error) => {
                    setErr(true);
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (url) => {
                            await updateProfile(res.user, {
                                displayName: data.name,
                                photoURL: url,
                            });
                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName: data.name,
                                email: data.email,
                                photoURL: url,
                            });
                            await setDoc(
                                doc(db, "userChats", res.user.uid),
                                {}
                            );
                        }
                    );
                }
            );

            navigate("/login");
        } catch (error) {
            setErr(true);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <span>Cadastro</span>
                {err && (
                    <MsgErroLogin>
                        <div>
                            Erro ao fazer o cadastro dos dados. Digite
                            novamente!
                        </div>
                    </MsgErroLogin>
                )}

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
                    Já é cadastrado? Faça <Link to="/login">Login</Link>
                </p>
            </Form>
        </Container>
    );
}
