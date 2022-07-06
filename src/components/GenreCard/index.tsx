import * as S from "./style"

const GenreCard = ( {id, name, image, clickItem}) => {
	return <S.GenreCard 
				onClick={() => clickItem(id)} >
			<S.GenreImage src={image}  />
    </S.GenreCard>;
};

export default GenreCard;