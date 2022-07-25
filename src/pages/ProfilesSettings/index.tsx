import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { XProfilesService } from "services/XProfilesService";
import { ProfileCardItem } from "components/ProfileCard/type";
import { MenuEdit, MenuEditItem } from "components/MenuEdit/style";
import ProfilesList from "pages/ProfilesList";
import ErrorBoundary from "components/ErrorBoundary";
import swal from "sweetalert";
import ButtonLarge from "components/ButtonLarge";
import { RoutePath } from "assets/types/routes";
import Menu from "components/Menu";

const ProfilesSettings = (props) => {
	const { id } =useParams();
	const [selectedProfile, setSelectedProfile] =useState<ProfileCardItem>({
		id: '',
		title: '',
		imageURL: '',
		userId: '' });
	const [removedProfile, setRemovedProfile] =useState<ProfileCardItem>({
		id: '',
		title: '',
		imageURL: '',
		userId: '' });
	const navigate = useNavigate();
			
	function handleProfileClick( profile ) {
		setSelectedProfile( profile );
	}

	function callSwall() {
		swal({
		  title: 'Remover Profile',
		  text: `Deseja excluir realmente o perfil ${selectedProfile.title}`,
		  icon: 'error',
		  buttons: ["Não", "Sim"]
		})
		.then((resp) => {
		  console.log(resp);
		  if(resp) {
			deleteProfile();
		  }
		})
		.catch( err => {
			navigate('/profilessettings');
			return;
		})
  	}
  
    async function deleteProfile() {
		if ( selectedProfile.id ) {
			const response =await XProfilesService.deleteProfile( selectedProfile.id )
			setRemovedProfile(response);
			if(!response) {
				throw new Error('Falha excluindo gênero')
			}
		}
	}

	async function profilesSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		//salva no storage os dados do profile selecionado
		const profile = selectedProfile;
		localStorage.setItem( '/profilessettings/profile', JSON.stringify(profile));
		navigate( RoutePath.HOME );
		return;
	}

	function handleMenuItemClick( action ) {
		if (action==='add') {
			navigate('/profilessettings/add');
		} 
		else 
		if (action==='edit') {
			navigate(`/profilessettings/edit/${selectedProfile.id}`);
		} 
		else {
			callSwall();
		}
	}

	useEffect( () => {
	},[])

	return  ( 
		<S.ProfilesSettings>
			< Menu profilePage={true} />
			<S.ProfilesSettingsContent>
				<S.ProfilesSettingsTitle> PERFILS </S.ProfilesSettingsTitle>
				<MenuEdit>
					<MenuEditItem 
						id="menuitem-add" 
						onClick={() => handleMenuItemClick('add')} 
						href={'#'} 
						> Adicionar </MenuEditItem>
					<MenuEditItem 
						id="menuitem-edit" 
						onClick={() => handleMenuItemClick('edit')} 
						href={'#'}
						style={{pointerEvents: (selectedProfile.id ? "auto" : "none")}}
						> Editar </MenuEditItem>
					<MenuEditItem 
						id="menuitem-remove" 
						onClick={() => handleMenuItemClick('remove')} 
						href={'#'}
						style={{pointerEvents: (selectedProfile.id ? "auto" : "none")}}
						> Remover </MenuEditItem>
				</MenuEdit> 
				<ErrorBoundary>
					<ProfilesList
						profileClick={handleProfileClick}
						updateList={removedProfile}
					/>
				</ErrorBoundary>
				<S.ProfilesSettingsButton>
					<S.ProfilesSettingsButtonBox>
						<ButtonLarge value={"Selecionar"} type="submit" onClick={profilesSubmit} disabled={(selectedProfile.id ? false : true)} />
					</S.ProfilesSettingsButtonBox>
				</S.ProfilesSettingsButton>
			</S.ProfilesSettingsContent>
		</S.ProfilesSettings>
	)
};

export default ProfilesSettings;
