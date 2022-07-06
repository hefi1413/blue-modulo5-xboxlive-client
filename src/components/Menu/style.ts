import styled, { css } from "styled-components";

export const Menu = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0;
		padding-left: 20px;
		padding-right: 20px;
		height: 100px;
		width: 100%;
		background: ${theme.colors.baseBg2};
		box-sizing: border-box;
	`}
`;

export const MenuLeft = styled.div`
	${({}) => css`
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 05px;
        width: 300px;
        height: 80%;
		background-color: #99ccff;
		border-radius: 7;
    `}
`;

export const MenuLeftImage = styled.img`
	${() => css`
		width: 40%;
		height: 100%;
	`}
`;

export const MenuLeftName = styled.h4`
	${() => css`
	`}
`;

export const MenuRight = styled.div`
	${() => css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 10px;
        width: 300px;
        height: 80%;
		background-color: #99ccff;
		border-radius: 7;
    `}
`;
