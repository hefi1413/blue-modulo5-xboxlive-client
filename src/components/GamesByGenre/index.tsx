import { useState, useEffect } from "react";
import * as S from "./style"
import  Game  from '../GameCard';
import { GameCardItem }  from '../GameCard/type';
import { XGamesService } from "services/XGamesService";

const GamesByGenre = ( { genreId } ) => {
    console.log( 'GamesByGenre()');
    const [games, setGames] = useState<GameCardItem[]>();

    const loadGames = async () => {
        console.log( 'loadGames()');

        const response =await XGamesService.getGamesByGenre(+genreId);
        setGames(response);

        if(!response) {
            throw new Error('Falha carregando jogos favoritos')
        }
    };

    useEffect(() => {
        loadGames();
    }, []);

    return ( 
        <>
            <S.GamesByGenre>
                {games?.map( (game) => (
                    <Game 
                        title={game.title}
                        image={game.CoverImageUrl}
                    />
                ) ) }
            </S.GamesByGenre>
        </>
    )
};

export default GamesByGenre;
