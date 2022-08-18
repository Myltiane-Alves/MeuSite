import * as S from './styles';

import Logo from '../../assets/logo.png';

type Props = {
  open: boolean;
};

function RightNav(props: Props) {
  return (
    <div>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} />

        <S.Li>
          <a href='/menu1'>Home</a>
        </S.Li>
        <S.Li>
          <a href='/menu1'>PortFólio</a>
        </S.Li>
        <S.Li>
          <a href='/menu2'> Sobre </a>
        </S.Li>
          <S.Li>
            <a href='/menu3'> Habilidades</a>
          </S.Li>
          <S.Li>
            <a href='/menu4'> Contato </a> 
          </S.Li>
      </S.Ul>
    </div>
  );
}

export default RightNav;
