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

	useEffect( () => {
		// armazena dados do gênero invocado pela página <homepage>
	},[])

	return  ( 
		<S.GenresSettings>
			<Menu profilePage={false} />
			<S.GenresSettingsContent>
				<S.GenresSettingsTitle> GÊNEROS </S.GenresSettingsTitle>
				<MenuEdit>
					<MenuEditItem 
							id="menuitem-add" 
							href={`/genressettings/add`}> 
							Adicionar </MenuEditItem>
					<MenuEditItem 
							id="menuitem-edit" 
							href={`/genressettings/edit/${selectedGenre.id}`}> 
							Editar </MenuEditItem>
					<MenuEditItem 
							id="menuitem-remove" 
							onClick={() => callSwall()} 
							href={'#'}> 
							Remover </MenuEditItem>
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
