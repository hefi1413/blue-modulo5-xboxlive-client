import styled, { css } from "styled-components";

export const GenresList = styled.div`
	${() => css`
		display: flex;
		flex-flow: row wrap;
		gap:30px;
		justify-content: flex-start;
		width: 100%;
		height: 100%; //500px;
  		overflow-y: auto;
		margin-top: 10px;
		padding: 05px;
	`}
`;
