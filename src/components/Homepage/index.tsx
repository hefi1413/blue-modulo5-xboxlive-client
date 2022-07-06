import * as S from "./style"
import FavoriteGames from "components/FavoriteGames";
import GamesGenre from "components/GamesGenre";
import ErrorBoundary from "components/ErrorBoundary"
import Menu from "components/Menu"

const id = 1;
const url = 'https://i.pinimg.com/originals/6c/86/77/6c8677e1e42f18b85b7bc1253a1becfe.jpg';

const Homepage = () => {
	return  ( 
		<S.Homepage>
			<Menu
				urlProfile={url} 
			/>
			<S.HomeContent>
				<S.HomeContentTitle> FAVORITOS </S.HomeContentTitle>
				<ErrorBoundary>
					<FavoriteGames
						profileId={id}
					/>
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