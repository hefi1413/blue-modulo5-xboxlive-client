
import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { GenreCardItem } from 'components/GenreCard/type'
import { XGenresService } from 'services/XGenresService';
import * as S from "./style"
import Menu from 'components/Menu';
import ButtonLarge from 'components/ButtonLarge';
import 'react-listbox/dist/react-listbox.css';

interface GenreCardValues {
    label: string
    value: number
}

const GenreEdit = (props) => {
    const { id } =useParams();
    const [values, setValues] = useState<GenreCardItem>({
        id: '',
        name: '',
        coverImageUrl: ''
    });
    let navigate = useNavigate();
    
    const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
        setValues((values: GenreCardItem) => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }  

    async function handleBack() {
        navigate(`/genressettings`);
        return;
    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        if( id ) {
            // altera genero na base dados
            XGenresService.updateGenre(values);
        } else {
            // cria genero na base dados
            XGenresService.createGenre(values);
        }

        // volta para tela <gamesettings>
        handleBack();
    }

    const loadGenre = async () => {
        if( id ) {
            let response  =await XGenresService.getGenreById( id );

            setValues( response )
        }
    }

    useEffect(()=> {

        loadGenre();

    },[] )
      
    return (
        <> 
            <S.GameRegister>
                <Menu profilePage={false} />
                <S.GameRegisterTitle> { ( id ? 'ALTERAR G~ENERO' : 'ADICIONAR GÊNERO')} </S.GameRegisterTitle> 
                <S.GameRegisterContent>
                    <S.GameRegisterForm onSubmit={handleSubmit}>
                        <input type="text" name='name' onChange={handleChangesValues} placeholder='Nome do gênero' value={values.name} />
                        <input type="text" name='coverImageUrl' onChange={handleChangesValues}  placeholder='Imagem url' value={values.coverImageUrl}/>
                        <S.GameRegisterButton>
                            <ButtonLarge value={ ( id ? "Confirmar" : "Salvar") } type="submit" />
                        </S.GameRegisterButton>
                    </S.GameRegisterForm>
                </S.GameRegisterContent>
            </S.GameRegister>
        </>
    );
}

export default GenreEdit;