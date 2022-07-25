
import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import * as S from "./style"
import Menu from 'components/Menu';
import ButtonLarge from 'components/ButtonLarge';
import { ProfileCardItem } from 'components/ProfileCard/type';
import { XProfilesService } from 'services/XProfilesService';

const ProfileEdit = (props) => {
    const { id } =useParams();
    const [values, setValues] = useState<ProfileCardItem>({
        id: '',
        title: '',
        imageURL: '',
        userId: '',
    });
    let navigate = useNavigate();
    
    const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
        setValues((values: ProfileCardItem) => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }  

    async function handleBack() {
        navigate(`/profilessettings`);
        return;
    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        if( id ) {
            // altera profile na base dados
            XProfilesService.updateProfile(values);
        } else {
            let _user =localStorage.getItem('user');
            if( _user ) {
                let user =JSON.parse( _user );
                values['userId'] =user.id;
                // cria profile na base dados
                XProfilesService.createProfile(values);
            }
        }

        // volta para tela <Profilesettings>
        handleBack();
    }

    const loadProfile = async () => {
        if( id ) {
            const response  =await XProfilesService.getProfileById( id );

            delete response.games;

            setValues( response )
        }
    }

    useEffect(()=> {

        loadProfile();

    },[] )
      
    return (
        <> 
            <S.ProfileRegister>
                <Menu profilePage={true} />
                <S.ProfileRegisterContent>
                    <S.ProfileRegisterTitle> {( id ? 'ALTERAR PERFIL' : 'ADICIONAR PERFIL')} </S.ProfileRegisterTitle> 
                    <S.ProfileRegisterForm onSubmit={handleSubmit}>
                        <input type="text" name='title' onChange={handleChangesValues} placeholder='Título do perfil' value={values.title} />
                        <input type="text" name='imageURL' onChange={handleChangesValues}  placeholder='Imagem url' value={values.imageURL}/>
                        <S.ProfileRegisterButton>
                            <ButtonLarge value={ ( id ? "Confirmar" : "Salvar") } type="submit" />
                        </S.ProfileRegisterButton>
                    </S.ProfileRegisterForm>
                </S.ProfileRegisterContent>
            </S.ProfileRegister>
        </>
    );
}

export default ProfileEdit;
