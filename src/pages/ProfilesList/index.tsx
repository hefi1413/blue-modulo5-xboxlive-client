import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { RoutePath } from "assets/types/routes";
import { ProfileCardItem } from "components/ProfileCard/type";
import { XProfilesService } from "services/XProfilesService";
import * as S from "./style";
import { Profile } from "components/Profile/types";
import ProfileCard from "components/ProfileCard";

const ProfilesList = ( { profileClick , updateList } ) => {
    const [profiles, setProfiles] = useState<ProfileCardItem[]>([]);
    const navigate = useNavigate();

    const loadProfiles = async () => {
        const token = localStorage.getItem('token');
        if(!token) {
            navigate( RoutePath.LOGIN );
            return;
        };

		let _user =localStorage.getItem('user');
		if( ! _user ) {
            navigate( RoutePath.LOGIN );
            return;
		}
        let __user =JSON.parse( _user );

        const response =await XProfilesService.getProfiles();
        if(!response) {
            throw new Error('Falha carregando perfils do usuário')
        }
        // retorna todos perfils do usuário logado
        const profiles =response.filter( (profile: Profile) => {
            return profile.userId ===__user.id; 
        });

        setProfiles(profiles);
    };

    useEffect(() => {

        loadProfiles();
        
    }, [updateList]);

    return ( 
        <>
            <S.ProfilesList>
                {profiles?.map( (profile: ProfileCardItem, index) => (
                    <ProfileCard
                        profile={profile} 
                        clickItem={profileClick}
                        key={index}
                    />
                ) ) }
            </S.ProfilesList>
        </>
    )
};

export default ProfilesList;
