import { useNavigate } from 'react-router-dom';
import { RoutePath }  from 'assets/types/routes';

import * as S from "./style"

const ProfileCard = ( {profile, clickItem}) => {
	
	return (
		<>
			<S.ProfileCard 
					onClick={() => clickItem( profile )}>
				<S.ProfileCardImageBox>
					<S.ProfileCardImage src={profile.imageURL} title="Clique em um perfil para mais opções" />
				</S.ProfileCardImageBox>
				<S.ProfileCardTitle>{profile.title}</S.ProfileCardTitle>
			</S.ProfileCard>
		</>
	)
};

export default ProfileCard;