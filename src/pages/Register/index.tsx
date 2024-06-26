import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Container, Form, PhotoAdd, Logo } from "./styles";
import { MsgErroLogin } from "../Login/styles";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { BsChatDots } from "react-icons/bs";
import { Loading } from "../../components/Loading";

type DataProps = {
    name: string;
    email: string;
    password: string;
    file: any;
};

export function Register() {
    const [err, setErr] = useState<boolean>(false);
    const navigate = useNavigate();
    const [photo, setPhoto] = useState<any>();
    let imgSrc = useRef<any>();
    const readerPhoto = photo?.item(0);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit } = useForm<DataProps>();
    const onSubmit: SubmitHandler<DataProps> = async (data) => {
        setLoading(true);
        console.log(readerPhoto);
        if (!readerPhoto) {
        }

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            const date = new Date().getTime();
            const storageRef = ref(storage, `${readerPhoto.name + date}`);

            await uploadBytesResumable(storageRef, readerPhoto).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName: data.name,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName: data.name,
                            email: data.email,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/chat-web");
                    } catch (err) {
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (error) {
            setErr(true);
            setLoading(false);
        }
    };

    let reader = new FileReader();
    reader.onload = () => {
        imgSrc.current.src = reader.result;
    };

    if (readerPhoto) {
        reader.readAsDataURL(readerPhoto);
    }

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
                        <span>Cadastro</span>
                        {err && (
                            <MsgErroLogin>
                                <div>
                                    Erro ao fazer o cadastro dos dados. Digite
                                    novamente!
                                </div>
                            </MsgErroLogin>
                        )}

                        <input
                            {...register("name")}
                            type={"text"}
                            placeholder="Nome e sobrenome"
                        />
                        <input
                            {...register("email")}
                            type={"email"}
                            placeholder="Email"
                        />
                        <input
                            {...register("password")}
                            type={"password"}
                            placeholder="Senha"
                        />
                        <input
                            {...register("file")}
                            type={"file"}
                            id="file"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setPhoto(e.target.files)}
                        />
                        <label htmlFor="file">
                            {readerPhoto ? (
                                <PhotoAdd ref={imgSrc} />
                            ) : (
                                <MdOutlineAddPhotoAlternate size={50} />
                            )}

                            {readerPhoto ? (
                                <span>Escolher outra foto</span>
                            ) : (
                                <span>Adicionar foto de perfil</span>
                            )}
                        </label>

                        <button type="submit">Cadastrar</button>
                        <p>
                            Já é cadastrado? Faça <Link to="/login">Login</Link>
                        </p>
                    </>
                )}
            </Form>
        </Container>
    );
}
