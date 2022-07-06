import { useState, useEffect } from "react";
import * as S from "./style"
import  Game  from '../GameCard';
import { GameCardItem }  from '../GameCard/type';
import { XGamesService } from "services/XGamesService";

const FavoriteGames = ( { profileId } ) => {
    console.log( 'FavoriteGames()');
    const [games, setGames] = useState<GameCardItem[]>();

    const loadGames = async () => {
        console.log( 'loadGames()');

        const response =await XGamesService.getHomepage(+profileId);
        setGames(response);

        if(!response) {
            throw new Error('Falha carregando jogos favoritos')
        }
    };

    useEffect(() => {
        loadGames();
    }, []);

    /*

     try{ 
        loadGamesByProfile();
    } catch( err ) {
        console.log( 'Erro:', err);
        throw new Error('Falha carregando jogos favoritos')
    }

                <Game
                    title={game.title} 
                    image={game.CoverImageUrl}
                />

        <S.FavoritesGames>
            {games?.map( (game) => {
                <span>game.title</span>
            } ) }
        </S.FavoritesGames>


 */
    return ( 
        <>
            <S.FavoritesGames>
                {games?.map( (game, index) => (
                    <Game 
                        title={game.title}
                        image={game.CoverImageUrl}
                        key={index}
                    />
                ) ) }
            </S.FavoritesGames>
        </>
    )
};

export default FavoriteGames;
