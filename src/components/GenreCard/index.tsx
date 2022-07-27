import * as S from "./style"

const GenreCard = ( {id, name, image, clickItem, dblClickItem, info}) => {

	return (
		<>
			<S.GenreCard 
				title={info}
				tabIndex={1}
				onClick={() => ( clickItem ? clickItem( id, name ) : null )}
				onDoubleClick={() => ( dblClickItem ? dblClickItem( id, name ) : null)}>
				<S.GenreCardImageBox>
					<S.GenreCardImage src={image}  />
				</S.GenreCardImageBox>
				<S.GenreCardTitle>{name}</S.GenreCardTitle>
			</S.GenreCard>
		</>
	)
};

export default GenreCard;