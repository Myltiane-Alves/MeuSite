import * as S from './styles';

export default function Header() {

  return (
    <S.Header>
      <div>
        <div>
          <img src="../../assets/logo.png" alt="Logo de Myltiane Alves" />
        </div>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Skills</a></li>
          </ul>
        </nav>
      </div>
    </S.Header>
  )
}