import { useState, useEffect } from "react";
import * as S from "./style"
import  GenreCard  from '../GenreCard';
import { GenreCardItem }  from '../GenreCard/type';
import { XGenresService } from "services/XGenresService";
import { RoutePath } from "assets/types/routes";
import { useNavigate } from "react-router-dom";

const GamesGenre = () => {
    console.log( 'GamesGenre()');
    const [genres, setGenres] = useState<GenreCardItem[]>();
    const navigate = useNavigate();

    const getGamesById = async ({idGenre}) => {
        console.log( 'loadGames()');

        navigate( RoutePath.SETTINGS_GAMES, {state:idGenre});
    };

    const loadGenres = async () => {
        console.log( 'loadGenres()');

        const response =await XGenresService.getGenres();
        setGenres(response);

        if(!response) {
            throw new Error('Falha carregando jogos favoritos')
        }
    };

    useEffect(() => {
        loadGenres();
    }, []);

    return ( 
        <>
            <S.GamesGenre>
                {genres?.map( (genre, index) => (
                    <GenreCard 
                        id={genre.id}
                        name={genre.name}
                        image={genre.coverImageUrl}
                        key={index}
                        clickItem={(genreId) => getGamesById(genreId)}
                        //handleGenre={handleClick}
                    />
                ) ) }
            </S.GamesGenre>
        </>
    )
};

export default GamesGenre;
