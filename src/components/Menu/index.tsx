import * as S from "./style";

const Menu = ({urlProfile}) => {

	
	return (
		<S.Menu>
			<S.MenuLeft>
				<S.MenuLeftImage src={urlProfile} />
				<S.MenuLeftName>
					<a href="/">Nome Perfil</a>
				</S.MenuLeftName>
			</S.MenuLeft>
			<S.MenuRight>
				<h3>XBlue LIVE</h3>
				<a href="/">Logout</a> 
			</S.MenuRight>
		</S.Menu>
	);
};

export default Menu;