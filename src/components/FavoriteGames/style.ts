import styled, { css } from "styled-components";

export const FavoritesGames = styled.div`
	${() => css`
		display: flex;
		flex-flow: row wrap;
		gap:15px;
		justify-content: flex-start;
		width: 93%;
		height:250px;
  		overflow-y: auto;
		margin-top: 10px;
		padding: 05px;
	`}
`;
