import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { XGenresService } from "services/XGenresService";
import { RoutePath } from "assets/types/routes";
import * as S from "./style";
import { GenreCardItem }  from 'components/GenreCard/type';
import  GenreCard  from 'components/GenreCard';

const GenresList = ( { genreClick, listUpdate } ) => {
    console.log( 'FavoriteGames()');
    
    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();

    const loadGenres = async () => {
        console.log( 'loadGames()');

        const token = localStorage.getItem('token');
        //console.log( 'token:',token);
        if(!token) {
            navigate( RoutePath.LOGIN );
            return;
        }

        const response =await XGenresService.getGenres();
        setGenres(response);

        if(!response) {
            throw new Error('Falha carregando jogos favoritos')
        }
    };

    useEffect(() => {

        loadGenres();
        
    }, [listUpdate]);

    return ( 
        <>
            <S.GenresList>
                {genres?.map( (genre: GenreCardItem, index) => (
                    <GenreCard
                        id={genre.id} 
                        name={genre.name}
                        image={genre.coverImageUrl}
                        clickItem={genreClick}
                        dblClickItem={null}
                        info={'Clique no gênero para mais opções'}
                        key={index}
                    />
                ) ) }
            </S.GenresList>
        </>
    )
};

export default GenresList;
