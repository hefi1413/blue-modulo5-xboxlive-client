import styled, { css } from "styled-components";

export const GamesGenre = styled.div`
	${() => css`
		display: flex;
		flex-flow: row wrap;
		gap: 10px;
		justify-content: flex-start;
		overflow-y: auto;
		width: 93%;
		height: 350px;
		margin-top: 10px;
		padding: 05px;
	`}
`;