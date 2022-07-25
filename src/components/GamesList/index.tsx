import { useState, useEffect } from "react";
import { GameCardItem }  from '../GameCard/type';
import { XGamesService } from "services/XGamesService";
import  GameCard  from '../GameCard';
import * as S from "./style"

const GamesList = ({ clickItem, listUpdate }) => {
    const [games, setGames] = useState<GameCardItem[]>();

	async function loadGames() {
        
        const idgenre =localStorage.getItem('/gamessettings/idgenre');
        // se existie IDGENRE lê todos jogos deste gênero
		if(idgenre) {
			const response =await XGamesService.getGamesByGenre(idgenre);
			setGames(response);

			if(!response) {
				throw new Error('Falha carregando jogos do gênero informado')
			}
		}
        else {
            // se não existe IDGENRE lê todos jogos CADASTRADOS
            const response =await XGamesService.getGames();
            setGames(response);

            if(!response) {
                throw new Error('Falha carregando jogos')
            }
        }
	}

    useEffect(() => {

        loadGames();

    }, [listUpdate]);

    return ( 
        <>
            <S.GamesList>
                {games?.map( (game, index) => (
                    <GameCard 
                        id={game.id}
                        title={game.title}
                        image={game.CoverImageUrl}
                        clickItem={clickItem}
                        info={'Clique no jogo para mais opções'}
                        key={index}
                    />
                ) ) }            
            </S.GamesList>
        </>
    )
};

export default GamesList;
