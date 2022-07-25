import * as S from "./style"
import FavoriteGames from "components/FavoriteGames";
import GamesGenre from "components/GamesGenre";
import ErrorBoundary from "components/ErrorBoundary"
import Menu from "components/Menu"
import { ProfileCardItem } from "components/ProfileCard/type";

const Homepage = () => {
	
	return  ( 
		<S.Homepage>
			<Menu profilePage={false} />
			<S.HomeContent>
				<S.HomeContentTitle> FAVORITOS </S.HomeContentTitle>
				<ErrorBoundary>
					<FavoriteGames />
				</ErrorBoundary>
				<S.HomeContentTitle> GÊNEROS </S.HomeContentTitle>
				<ErrorBoundary>
					<GamesGenre />
				</ErrorBoundary>
			</S.HomeContent>
		</S.Homepage>    
	)
};

export default Homepage;