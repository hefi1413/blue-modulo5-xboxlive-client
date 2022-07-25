import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { GameCardItem }  from '../GameCard/type';
import { XGamesService } from "services/XGamesService";
import { RoutePath } from "assets/types/routes";
import * as S from "./style";
import  GameCard  from '../GameCard';

const FavoriteGames = ( ) => {
    const [games, setGames] = useState<GameCardItem[]>();
    const navigate = useNavigate();

    const loadGames = async () => {
        const token = localStorage.getItem('token');
        //console.log( 'token:',token);
        if(!token) {
            navigate( RoutePath.LOGIN );
            return;
        }
		//recupera profile do storage
		let _profile =localStorage.getItem('/profilessettings/profile');
        if(! _profile) {
            navigate( RoutePath.SETTINGS_PROFILES );
            return;
        }
		let __profile =JSON.parse(_profile);

        const response =await XGamesService.getHomepage(__profile.id);
        setGames(response);

        if(!response) {
            throw new Error('Falha carregando jogos favoritos')
        }
    };

    const gameClick = async () => {
    }

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
                    <GameCard
                        id={game.id} 
                        title={''}
                        image={game.CoverImageUrl}
                        clickItem={gameClick}
                        info={game.title}
                        key={index}
                    />
                ) ) }
            </S.FavoritesGames>
        </>
    )
};

export default FavoriteGames;
