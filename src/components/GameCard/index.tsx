import * as S from "./style"

const GameCard = ( {id, title, image, clickItem, info}) => {
	return ( 
		<>
			<S.GameCard 
				tabIndex={1}
				title={info}
				onClick={() => ( clickItem ? clickItem(id, title) : null )} 
				>
				<S.GameCardImageBox>
					<S.GameCardImage src={image} />
				</S.GameCardImageBox>
				<S.GameCardTitle>{title}</S.GameCardTitle>
			</S.GameCard>
		</>
	)
};

export default GameCard;