import styled, { css } from "styled-components";

export const GenresSettings = styled.div`
	${({theme}) => css`
        display: flex;
		flex-direction: column;
		justify-content: flex-start;
        align-items: center;
		background-color: ${theme.colors.baseBg1};
		width: 100%;
		height: 100vh;
		color: ${theme.colors.textColor};
	`}
`;

export const GenresSettingsContent = styled.main`
	${({theme}) => css`
        display: flex;
		flex-direction: column;
		justify-content: flex-start;
        align-items: center;
		width: calc(100% - 90px);
		height: calc(100% - 90px);
		overflow: none;
		box-sizing: border-box;
		margin: 0 auto;
	`}
`;

export const GenresSettingsTitle = styled.h1`
	${() => css`
		margin-right: 30px;
		margin-top: 15px;
	`}
`;