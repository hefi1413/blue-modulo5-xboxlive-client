import { useState, useEffect } from "react";
import * as S from "./style"
import ErrorBoundary from "components/ErrorBoundary"
import Menu from "components/Menu"
import GamesByGenre from "components/GamesByGenre";
import { MenuEdit, MenuEditItem } from "components/MenuEdit/style";
import { XGamesService } from "services/XGamesService";
import { GameCardItem } from "components/GameCard/type";
import { useParams } from 'react-router-dom';

const id = 1;
const url = 'https://i.pinimg.com/originals/6c/86/77/6c8677e1e42f18b85b7bc1253a1becfe.jpg';

//console.log(state.from)

const GamesEdit = (props) => {
    const [games, setGames] = useState<GameCardItem[]>();
	let { slug } = useParams();
   
	async function loadGames() {
		// const state = location.state as CustomizedState;

		console.log('id:', slug );

		const response =await XGamesService.getGamesByGenre(5);
		setGames(response);

		if(!response) {
			throw new Error('Falha carregando jogos favoritos')
		}
	}

    useEffect(() => {
        loadGames();
    }, []);


	return  ( 
		<S.GamesEdit>
			<Menu
				urlProfile={url} 
			/>
			<S.GamesEditContent>
				<S.GamesEditTitle> JOGOS </S.GamesEditTitle>
				<MenuEdit>
					<MenuEditItem> Add </MenuEditItem>
					<MenuEditItem> Edit </MenuEditItem>
					<MenuEditItem> Remove </MenuEditItem>
				</MenuEdit>
				<ErrorBoundary>
					<GamesByGenre
						genreId={id}
					/>
				</ErrorBoundary>
			</S.GamesEditContent>
		</S.GamesEdit>    
	)
};

export default GamesEdit;