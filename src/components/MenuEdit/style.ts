import styled, { css } from "styled-components";

export const MenuEdit = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		margin-right: 05px;
		padding-right: 10px;
		height: 60px;
		width: 100%;
		background: ${theme.colors.baseBg2};
        color: white;
		box-sizing: border-box;
	`}
`;

export const MenuEditItem = styled.a`
	${() => css`
		text-align: center;
    `}
`;
