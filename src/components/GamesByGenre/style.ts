import styled, { css } from "styled-components";

export const GamesByGenre = styled.div`
	${() => css`
		display: flex;
		flex-flow: row wrap;
		gap:20px;
		justify-content: flex-start;
		width: 93%;
		height:260px;
  		overflow-y: auto;
		margin-top: 10px;
		padding: 05px;
	`}
`;
