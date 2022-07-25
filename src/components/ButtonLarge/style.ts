import styled, { css } from "styled-components";

export const ButtonLarge = styled.button`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		background: ${theme.colors.primaryColor};
		color: ${theme.colors.textColor};
		border: none;
		height: 48px;
		width: 100%;
		cursor: pointer;
		${theme.mixins.bodyStyle()};
		font-weight: 600;
		box-shadow: 0px 8px 24px 0px ${theme.colors.shadowColor};
		&:disabled {
			color: ${theme.colors.textDark};
			background: gray;
			box-shadow: none;
			cursor: not-allowed;
		}
	`}
`;