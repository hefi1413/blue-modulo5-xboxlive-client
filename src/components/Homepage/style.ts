import styled, { css } from "styled-components";

export const Homepage = styled.div`
	${({theme}) => css`
		display: flex;
		justify-content: center;
		flex-direction: column;
		background-color: ${theme.colors.baseBg1};
		min-width: 100%;
		min-height: 100vh;
		color: ${theme.colors.textColor};
	`}
`;

export const HomeContent = styled.main`
	${({theme}) => css`
		width: calc(100% - 10px);
		height: 100vh;
		overflow: none;
		box-sizing: border-box;
		margin: 0 auto;
		padding-left: 30px;
		padding-right: 10px;
	`}
`;

export const HomeContentTitle = styled.h1`
	${() => css`
		margin-right: 30px;
		margin-top: 15px;
	`}
`;
