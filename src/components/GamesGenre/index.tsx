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

    const handleGenreDbClick = async (idGenre) => {
        // armazena IDGENRE para ser reutilizado por <GamesList />
        localStorage.setItem('gamesgenre/idgenre', idGenre);
        navigate( `gamessettings/${idGenre}` );
        return;
    };

    const loadGenres = async () => {
        const token =localStorage.getItem('token');
        if(!token) {
            navigate( RoutePath.LOGIN );
            return;
        }

        const response =await XGenresService.getGenres();
        setGenres(response);

        // armazena generos cadastrasdos para ser recuperado por <GameEdit />
        localStorage.setItem('gamessettings/add', JSON.stringify(response));

        if(!response) {
            throw new Error('Falha carregando gêneros');
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
                        clickItem={null}
                        dblClickItem={handleGenreDbClick}
                        info={'Duplo clique para ver os jogos deste gênero'}
                    />
                ) ) }
            </S.GamesGenre>
        </>
    )
};

export default GamesGenre;
