import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuEdit, MenuEditItem } from "components/MenuEdit/style";
import swal from "sweetalert";
import * as S from "./style"
import Menu from "components/Menu"
import ErrorBoundary from "components/ErrorBoundary"
import GamesList from "components/GamesList";
import { XGamesService } from "services/XGamesService";

interface SelectedGame {
	id: string,
	title: string
}

const GamesSettings = (props) => {
	const { id } =useParams();
	const [selectedGame, setSelectedGame] = useState<SelectedGame>({
		id: '',
		title: '',
	});
	const [removedGame, setRemovedGame] = useState<SelectedGame>({
		id: '',
		title: '',
	});
    const navigate = useNavigate();

	function handleGameClick( id, title ) {
		setSelectedGame( { id, title } );
	}

	function callSwall() {
		swal({
		  title: 'Remover Game',
		  text: `Deseja excluir realmente o jogo: ${selectedGame.title}`,
		  icon: 'error',
		  buttons: ["Não", "Sim"]
		})
		.then((resp) => {
		  console.log(resp);
		  if(resp) {
			deleteGame();
		  }
		})
		.catch( err => {
			navigate('/gamessettings');
			return;
		})
  	}
  
    async function deleteGame() {
		if ( selectedGame.id ) {
			const response =await XGamesService.deleteGame( selectedGame.id )
			if(!response) {
				throw new Error('Falha excluindo jogo')
			}
			setRemovedGame(response);
		}
	}

	useEffect( () => {
	},[])

	return  ( 
		<S.GamesSettings>
			<Menu profilePage={false} />
			<S.GamesSettingsContent>
				<S.GamesSettingsTitle> JOGOS </S.GamesSettingsTitle>
				<MenuEdit>
					<MenuEditItem 
						id="menuitem-add" 
						href={`/gamessettings/add`}>  
						Adicionar </MenuEditItem>
					<MenuEditItem 
						id="menuitem-edit" 
						style={{pointerEvents: (selectedGame ? "auto" : "none") }} 
						href={`/gamessettings/edit/${selectedGame.id}`}> 
						Editar </MenuEditItem>
					<MenuEditItem 
						id="menuitem-remove" 
						style={{pointerEvents: (selectedGame ? "auto" : "none") }} 
						onClick={() => callSwall()} 
						href={'#'}> 
						Remover </MenuEditItem>
				</MenuEdit> 
				<ErrorBoundary>
					<GamesList
						idGenre={id}
						clickItem={handleGameClick} 
						listUpdate={removedGame}
					/>
				</ErrorBoundary>
			</S.GamesSettingsContent>
		</S.GamesSettings>    
	)
};

export default GamesSettings;
