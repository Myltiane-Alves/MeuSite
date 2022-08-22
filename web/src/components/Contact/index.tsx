import * as S from './styles';
import Myltiane from '../../assets/myltiane.jpg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
export default function Contact() {
  const { register, handleSubmit, reset, formState: {errors }} = useForm();

  const [name, setName] = useState('');
  return (
    <S.Container>
      <div>
        <h2>Contato</h2>
        <p>
          Contato:
          ✉ E-mail: myltiane.aux@gmail.com
          ☎ Celular/WhatsApp: (61) 98491-5007
          👨🏻💻 GitHub/Portfólio: https://github.com/Myltiane-Alves

        </p>
        <button>Baixar Curriculum</button>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              value={name}
              {...register("name", {
                required: "Nome é obrigatório",
                onChange: (e) => setName(e.target.value)
              })}
            />
          </div>
        </form>
      </div>
    </S.Container>
  )
}
