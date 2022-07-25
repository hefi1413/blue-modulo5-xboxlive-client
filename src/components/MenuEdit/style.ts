import styled, { css } from "styled-components";

export const MenuEdit = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		gap: 10px;
		height: 60px;
		width: 100%;
        color: white;
		box-sizing: border-box;
	`}
`;

export const MenuEditItem = styled.a`
	${( { theme } ) => css`
		text-align: center;
		color: ${theme.colors.primaryColor};
    `}
`;
