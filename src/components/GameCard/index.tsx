import * as S from "./style"

const Game = ( {title, image}) => {
	return ( 
		<>
			<S.GameCard>
				<S.GameImage src={image} />
			</S.GameCard>
		</>
	)
};

export default Game;