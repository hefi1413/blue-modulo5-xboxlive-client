
import React from 'react';
import { useEffect, useState } from "react";
import { GameCardItem } from 'components/GameCard/type'
import { useNavigate, useParams } from 'react-router-dom';
import { XGamesService } from 'services/XGamesService';
import * as S from "./style"
import Menu from 'components/Menu';
import ButtonLarge from 'components/ButtonLarge';
import 'react-listbox/dist/react-listbox.css';

interface iGenres {
    id: string,
    name: string,
    value: string
};

const GameEdit = (props) => {
    const { id } =useParams();
    const [values, setValues] =useState<GameCardItem>({
        id: '',
        title: '',
        CoverImageUrl : '',
        Description : '',
        Year :'',
        ImdbScore :'',
        TrailerYouTubeUrl :'',
        GameplayYouTubeUrl :'',
        genres: [],
    });
    const [genres, setGenres] =useState<iGenres[]>([]);
    const [selectedGenres, setSelectedGenres] =useState<string[]>([]);
    let navigate = useNavigate();
    
    const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
        setValues((values: GameCardItem) => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }  

    const handleChangeGenreList = (e) => {
        let value = Array.from(
                e.target.selectedOptions,
                    (option :iGenres) => option.value
        );
        setSelectedGenres(value);
    };

    async function handleBack() {
        let idGenre =sessionStorage.getItem("/gamessettings/idgenre");
        if(idGenre) {
            navigate(`/gamessettings/${idGenre}`);
        } else {
            navigate(`/gamessettings`);
        }
        return;
    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        // converte arrau de string em array de objetos
        let _selectedgenres: Object[] =[];
        selectedGenres.map( (id: string) => {
            _selectedgenres.push( { 'id': id })
        })

        values['genres'] = _selectedgenres;

        // edita jogo
        if( id ) {
            XGamesService.updateGame(values);
        // cria jogo na base de dados
        } else {
            XGamesService.createGame(values);
        }

        // volta para tela <gamesettings>
        //handleBack();
    }

    function loadGenres() {
        // recurepara dados armazenados em <homepage />
        let _genres =JSON.parse( localStorage.getItem('gamessettings/add')! );
        if(_genres) {
            setGenres(_genres);
        }
    }

    const loadGame = async () => {
        // se existe ID (alterar) lê as informações adicionais do jogo
        if( id ) {
            let response  =await XGamesService.getGameById( id );
            setValues( response );
            // verifica se existe generos neste jogo
            if( response.genres.length ) {
                let _selectedGenres: string[] =[];
                response.genres.map( (genre: iGenres) =>{
                    _selectedGenres.push( genre.id )
                } )
                setSelectedGenres( _selectedGenres );
            }
        }
    }

    useEffect(()=> {

        loadGenres();

        loadGame();
    },[] )
      
    return (
        <> 
            <S.GameRegister>
                <Menu profilePage={false} />
                <S.GameRegisterTitle> { ( id ? 'ALTERAR JOGO' : 'ADICIONAR JOGO' ) } </S.GameRegisterTitle> 
                <S.GameRegisterContent>
                    <S.GameRegisterForm onSubmit={handleSubmit}>
                        <input type="text" name='title' onChange={handleChangesValues} placeholder='Informe um título' value={values.title} />
                        <input type="text" name='CoverImageUrl' onChange={handleChangesValues}  placeholder='Imagem url' value={values.CoverImageUrl}/>
                        <input type="text" name='Description'  onChange={handleChangesValues} placeholder='Descrição do jogo' value={values.Description} />
                        <input type="text" name='Year' onChange={handleChangesValues} placeholder='Ano do lançamento' value={values.Year}   />
                        <input type="text" name='ImdbScore' onChange={handleChangesValues} placeholder='Score IMDB' value={values.ImdbScore}  />
                        <input type="text" name='TrailerYouTubeUrl' onChange={handleChangesValues} placeholder='Youtube url'  value={values.TrailerYouTubeUrl} />
                        <input type="text" name='GameplayYouTubeUrl' onChange={handleChangesValues} placeholder='Gameplay url' value={values.GameplayYouTubeUrl} />
                        <select multiple id="genresList" onChange={handleChangeGenreList} value={selectedGenres}>
                            {genres.map( (genre: iGenres, index)=>(
                                <option value={genre.id} key={index}>{genre.name} </option>
                            ))}
                        </select>
                        <S.GameRegisterButton>
                            <ButtonLarge value={ ( id ? "Confirmar" : "Salvar") } type="submit" />
                        </S.GameRegisterButton>
                    </S.GameRegisterForm>
                </S.GameRegisterContent>
            </S.GameRegister>
        </>
    );
}

export default GameEdit;
