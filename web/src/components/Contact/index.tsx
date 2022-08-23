import * as S from './styles';
import Myltiane from '../../assets/myltiane.jpg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import {RiWhatsappFill, RiSendPlaneFill  } from "react-icons/ri";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Contact() {
  const { register, handleSubmit, reset, formState: {errors }} = useForm();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <S.Container>
      <div>
        <h2>Contato</h2>
        <div className="email">
          <AiFillMail />
          <p> myltiane.aux@gmail.com </p>
        </div>
        <div className="phone">
          <RiWhatsappFill />
          <p> (61) 98491-5007 </p>
        </div>
        <div className="github">
          <AiFillGithub />
          <p> https://github.com/Myltiane-Alves </p>
        </div>

      </div>
      <div>
        <form>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              onFocus={(e) => e.target.placeholder = ""}
              value={name}
              {...register("name", {
                required: "Nome é obrigatório",
                onChange: (e) => setName(e.target.value)
              })}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              onFocus={(e) => e.target.placeholder = ""}
              value={email}
              {...register("email", {
                required: "E-mail é obrigatório",
                onChange: (e) => setEmail(e.target.value)
              })}
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              id="phone"
              placeholder="Digite seu telefone"
              value={phone}
              onFocus={(e) => e.target.placeholder = ""}
              {...register("phone", {
                required: "Telefone é obrigatório",
                onChange: (e) => setPhone(e.target.value),
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Número de telefone inválido"
                }
              })}
            />
              {errors.phone && (
                <span className="text-danger"></span>
              )}
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              placeholder="Digite sua mensagem"
              value={message}
              onFocus={(e) => e.target.placeholder = ""}
              {...register("message", {
                required: "Mensagem é obrigatória",
                onChange: (e) => setMessage(e.target.value),
                minLength: {
                  value: 10,
                  message: "Mensagem deve ter no mínimo 10 caracteres",
                }
              })}
            />
          </div>
          <button
            type="button"
            className="btn"
          >
          <a>
            Enviar contato
            <RiSendPlaneFill  size={16} style={{marginLeft: "5px"}}/>
          </a>
          </button>
        </form>
      </div>
      <ToastContainer />
    </S.Container>
  )
}
