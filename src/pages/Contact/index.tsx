import { Header } from "../../components/Header";

import styles from "./styles.module.scss";
import { Footer } from "../../components/Footer";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function Contact() {
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(watch("name"));

  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.content}>
          <form
            action="https://formsubmit.co/raphaelrenatoo@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Recebemos sua mensagem, agradecemos pelo contato. Assim que possível, retornaremos o contato!"
            />
            <input type="hidden" name="_cc" value="contato@patrocinavarzea.com.br" />
            <input
              type="hidden"
              name="_next"
              value="https://patrocinavarzea.vercel.app/"
            />

            <h1>Contato</h1>

            <input
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Nome"
            />
            {errors.name && <span>Este campo é obrigatório </span>}

            <input
              {...register("email", { required: true, maxLength: 50 })}
              type="email"
              name="email"
              placeholder="Email"
            />
            {errors.email && <span>Este campo é obrigatório </span>}

            <input
              {...register("phone", { maxLength: 15 })}
              placeholder="Telefone"
            />

            <input
              {...register("subject", { required: true, maxLength: 20 })}
              placeholder="Assunto"
            />
            {errors.subject && <span>Este campo é obrigatório </span>}

            <textarea
              {...register("message", { required: true, maxLength: 150 })}
              placeholder="Escreva aqui sua mensagem"
            />
            {errors.message && <span>Este campo é obrigatório </span>}

            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
