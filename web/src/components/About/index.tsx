import * as S from './styles';
import Myltiane from '../../assets/myltiane.jpg';
export default function About() {
  return (
    <S.Container>
      <div>
        <h2>Sobre</h2>

        <p>

          Myltiane Alves de Lima
          Sou Graduado em Análises e Desenvolvimento de Sistemas e
          Pós-Graduado em Desenvolvimento web, hoje trabalho como Dev-Full-Stack Júnior com a Criação de Software.

          Tenho 2 anos de experiência no mercado de desenvolvimento, tive oportunidade de trabalhar e desenvolver diversos, projetos,
          participando de cada etapa, do processo do desenvolvimento desde de modelagem de dados, a programação.

        </p>

        <div>
          <h2>Área de atuação atual:</h2>
          <p>
            • Desenvolvimento Front-End. Com HTML, CSS, JavaScript, ReactJS, React Hooks, Recat-Router-Dom, Styled-Components, axios,
            • Desenvolvimento Back-End. Com NodeJS, Express e Sequelize, Swagger-Autogen
          </p>
        </div>
        <div>
          <h2>Hard Skills:</h2>
          <p>
            • Tecnologias: Html5, Css3, Sass, BootStrap, Chackra-ui, Styled-Components, JavaScript, TypeScript, • ReactJs, NextJS, ReactNative.
            • UI/UX,
            • Desenvolvimento Back-End: Node-Js, Nest-Js, APIs REST, Express, Sequelize e Type-ORM
            • ORM: Prisma, Sequelize
            • Banco de Dados: MySql, Sql, MongoDB
            Documentação: Swagger, Swagger-Auto-gen
            Testes Unitários: Jest

            Metodologias Ágeis: Scrum e Kanban.

          </p>

        </div>

        <button>
          <a> Baixar Curriculum</a>
        </button>
      </div>
      <div><img src={Myltiane} alt="Myltiane Alves" width="70%"/></div>
    </S.Container>
  )
}
