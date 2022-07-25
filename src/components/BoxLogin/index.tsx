import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";

const BoxLogin = ({onSubmit, onChange, errorMessage}) => {
  return (
    <>
      <S.BoxLogin>
        <S.BoxLoginTitle> XBOX Live </S.BoxLoginTitle>
        <S.BoxLoginForm onSubmit={onSubmit}>
          <input type="text" name="email" placeholder="E-mail" onChange= {onChange} required/>
          <input type="password" name="password" placeholder="Senha" onChange= {onChange} required/>
          <ButtonLarge value="Entrar" type="submit" />
        </S.BoxLoginForm>
        <S.BoxLoginError>
          {errorMessage}
        </S.BoxLoginError>
      </S.BoxLogin>
    </>
  );
}

export default BoxLogin;