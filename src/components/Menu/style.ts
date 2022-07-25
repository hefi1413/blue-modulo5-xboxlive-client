import styled, { css } from "styled-components";

export const Menu = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0;
		height: 100px;
		width: 100%;
		padding-left: 40px;
		padding-right: 40px;
		background: ${theme.colors.baseBg1};
		box-sizing: border-box;
		border: 0px;
	`}
`;

export const MenuLeft = styled.div`
	${() => css`
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 05px;
        width: 30%;
        height: 80%;
    `}
`;

export const MenuLeftImageBox = styled.div`
	${() => css`
		width: 60px;
		height: 60px;
	`}
`;

export const MenuLeftImage = styled.img`
	${() => css`
		width: 100%;
		height: 100%;
		object-fit: cover;
	`}
`;

export const MenuLeftTitle = styled.div`
	${() => css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		a {
			color: white;
		}	
	`}
`;

export const MenuRight = styled.div`
	${() => css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 10px;
        width: 30%;
        height: 80%;
		border: 0px;
		a {
			color: white;
		}
    `}
`;
