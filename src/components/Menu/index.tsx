import { useState, useEffect } from "react";
import { RoutePath } from "assets/types/routes";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { ProfileCardItem } from "components/ProfileCard/type";

const Menu = ({ profilePage }) => {
	const [profile, setProfile] = useState<ProfileCardItem>({
		'id': '',
		'title':'',
		'imageURL':'',
		'userId':'',
	});
    const navigate = useNavigate();

	function profileLoad() {
		let _profile  =localStorage.getItem( '/profilessettings/profile');
		if(!_profile) {
			navigate( RoutePath.SETTINGS_PROFILES );
			return;
		};
		setProfile( JSON.parse( _profile ));	
	}	

	useEffect(() => {

		profileLoad();

	},[]);

	return (
		<>
			<S.Menu style={{justifyContent : ( (!profilePage) ? "space-between" : "flex-end" ) }}>
				{ ( 
					(!profilePage)
					?
					<S.MenuLeft>
						<S.MenuLeftImageBox>
							<S.MenuLeftImage src={profile.imageURL} />
						</S.MenuLeftImageBox>
						<S.MenuLeftTitle>
							<a href="/profilessettings"><h3>{profile.title}</h3></a>
						</S.MenuLeftTitle>
					</S.MenuLeft>
					:
					<>
					</>
				)
				}

				{ ( 
					(!profilePage)
					?
						<S.MenuRight>
							<h3>XBlue LIVE</h3>
							<a href="/">Home</a> 
							<a href="/gamessettings">Games</a> 
							<a href="/genressettings">Genres</a> 
							<a href="/logout">Logout</a> 
						</S.MenuRight>
					:
						<S.MenuRight>
							<h3>XBlue LIVE</h3>
							<a href="/profilessettings">Profiles</a> 
							<a href="/logout">Logout</a> 
						</S.MenuRight>
				) }

			</S.Menu>
		</>
	);
};

export default Menu;