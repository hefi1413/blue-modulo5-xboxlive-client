import styled, { css } from "styled-components";

export const GamesEdit = styled.div`
	${({theme}) => css`
        display: flex;
		flex-direction: column;
		justify-content: center;
        align-items: center;
		background-color: ${theme.colors.baseBg1};
		min-width: 100%;
		min-height: 100vh;
		color: ${theme.colors.textColor};
	`}
`;

export const GamesEditContent = styled.main`
	${({theme}) => css`
        display: flex;
		flex-direction: row;
		justify-content: center;
        align-items: center;
		width: calc(100% - 150px);
		height: 100vh;
		overflow: none;
		box-sizing: border-box;
		margin: 0 auto;
	`}
`;

export const GamesEditTitle = styled.div`
	${() => css`
        display: flex;
		flex-direction: row;
		justify-content: center;
        align-items: center;
		margin-top: 15px;
	`}
`;
