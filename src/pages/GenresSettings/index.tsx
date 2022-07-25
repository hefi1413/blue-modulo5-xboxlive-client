import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import * as S from "./style";
import Menu from "components/Menu";
import ErrorBoundary from "components/ErrorBoundary";
import GenresList from "components/GenresList";
import { XGenresService } from "services/XGenresService";
import { GenreCardItem } from "components/GenreCard/type";
import { MenuEdit, MenuEditItem } from "components/MenuEdit/style";


const GenresSettings = (props) => {
	const { id } =useParams();
	const [selectedGenre, setSelectedGenre] =useState<GenreCardItem>({
		id: '',
		name: '',
		coverImageUrl: '' });
	const [removedGenre, setRemovedGenre] =useState<GenreCardItem>({
		id: '',
		name: '',
		coverImageUrl: '' });
	const navigate = useNavigate();
			
	function handleGenreClick( id, name ) {
		setSelectedGenre( { id, name, coverImageUrl:''} );
	}

	function callSwall() {
		swal({
		  title: 'Remover Gênero',
		  text: `Deseja excluir relamente  ${selectedGenre.name}`,
		  icon: 'error',
		  buttons: ["Não", "Sim"]
		})
		.then((resp) => {
		  console.log(resp);
		  if(resp) {
			deleteGenre();
		  }
		})
		.catch( err => {
			navigate('/genressettings');
			return;
		})
  	}
  
    async function deleteGenre() {
		if ( selectedGenre.id ) {
			const response =await XGenresService.deleteGenre( selectedGenre.id )
			setRemovedGenre(response);
			if(!response) {
				throw new Error('Falha excluindo gênero')
			}
		}
	}

	function handleMenuItemClick( action ) {
		if (action==='add') {
			navigate('/genressettings/add');
		} 
		else 
		if (action==='edit') {
			navigate(`/genressettings/edit/${selectedGenre.id}`);
		} 
		else {
			callSwall();
		}
	}

	useEffect( () => {
		// armazena dados do gênero invocado pela página <homepage>
		if(id) {
			sessionStorage.setItem("/genressettings/idgenre", id );
		}
	},[])

	return  ( 
		<S.GenresSettings>
			<Menu profilePage={false} />
			<S.GenresSettingsContent>
				<S.GenresSettingsTitle> GÊNEROS </S.GenresSettingsTitle>
				<MenuEdit>
					<MenuEditItem id="menuitem-add" onClick={() => handleMenuItemClick('add')} href={`#`}> Adicionar </MenuEditItem>
					<MenuEditItem id="menuitem-edit" onClick={() => handleMenuItemClick('edit')} href={'#'}> Editar </MenuEditItem>
					<MenuEditItem id="menuitem-remove" onClick={() => handleMenuItemClick('remove')} href={'#'}> Remover </MenuEditItem>
				</MenuEdit> 
				<ErrorBoundary>
					<GenresList	
						genreClick={handleGenreClick}
						listUpdate={removedGenre}	
					/>
				</ErrorBoundary>
			</S.GenresSettingsContent>
		</S.GenresSettings>    
	)
};

export default GenresSettings;
