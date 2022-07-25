import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { XAuthService } from "services/XAuthService";
import { RoutePath } from "assets/types/routes";
import * as S from "./style";
import BoxLogin from "components/BoxLogin";

interface credentials {
    email: string;
    senha: string;
}

const Login = () => {
	const [values, setValues] = useState({
		email: '',
		senha: '',
	});
	const [errorMessage, setErrorMessage] =useState<string>();
	const navigate = useNavigate();

	const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
		setValues((values: credentials) => ({
			...values,
			[event.target.name]: event.target.value
		}))
	}

	async function sendRequest(event: React.SyntheticEvent) {
		event.preventDefault();

		try {
			let req =await XAuthService.login( values );

			// verifica se houve error
			if(req.response) {
				setErrorMessage(req.response.data.message);
			}
			else
			// resposta com sucesso
			if( req.data.token ) {
				localStorage.setItem( 'token', req.data.token);
				localStorage.setItem( 'user', JSON.stringify(req.data.user) );
				navigate( RoutePath.SETTINGS_PROFILES );
				return;
			}

		} catch( e ) {
			setErrorMessage('Não foi possível conectar ao Backend');
		}

	}

    useEffect(() => {

		setErrorMessage('');

    }, [values]);	

	return (
		<S.Login>
			<S.LoginContent>
				<BoxLogin
					onSubmit={sendRequest}
					onChange={handleChangesValues}
					errorMessage={errorMessage}
				/>
			</S.LoginContent>
		</S.Login>
	);
};

/*
Login.propTypes = {
	setToken: PropTypes.func.isRequired
};
*/

export default Login;