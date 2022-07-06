import styled, { css } from "styled-components";

export const GameCard = styled.div`
	${({ theme }) => css`
        width: 150px;
        height: 150px;
        border:1px solid black;
        border-radius: 08px;
        border-radius: 6
	`}
`;

export const GameImage = styled.img`
	${({ theme }) => css`
        width: 100%;
        height: 100%;
	`}
`;

export const GameMain = styled.div`
	${({ theme }) => css`
        width: 400px;
        height: 400px;
        border:1px solid black;
        border-radius: 08px;
	`}
`;