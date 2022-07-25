import styled, { css } from "styled-components";

export const GameRegister = styled.div`
	${({theme}) => css`
		display: flex;
		justify-content: center;
        align-items: center;
		flex-direction: column;
		color: ${theme.colors.textColor};
		background-color: ${theme.colors.baseBg1};
		min-width: 100%;
		min-height: 100vh;
	`}
`;

export const GameRegisterContent = styled.div`
	${({theme}) => css`
		display: flex;
		flex-direction: column;
        align-items: center;
		width: 90%;
		height: 100vh;
	`}
`;

export const GameRegisterForm = styled.form`
	${({theme}) => css`
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
        align-items: center;
		gap: 10px;
		background-color: ${theme.colors.baseBg2};
		color: ${theme.colors.textColor};
		width: 40%;
		height: calc(100%-300px);
        padding-left: 10px;
        padding-right: 10px;
        input {
            ${theme.mixins.input()};
            color: ${theme.colors.textColor}; ;
            width: 100%;
        }
	`}
`;

export const GameRegisterTitle = styled.h2`
	${() => css`
		margin-right: 25px;
		margin-top: 30px;
    `}
`;

export const GameRegisterButton = styled.div`
	${() => css`
		display: flex;
        justify-content: flex-end;
		flex-direction: row;
		width: 100%;
    `}
`;


export const GameRegisterGenres = styled.div`
	${() => css`
		display: flex;
        justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		height: 70px;
    `}
`;
