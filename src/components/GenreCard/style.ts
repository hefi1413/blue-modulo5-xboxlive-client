import styled, { css } from "styled-components";

export const GenreCard = styled.div`
	${({ theme }) => css`
        width: 300px;
        height: 300px;
        border:1px solid black;
        border-radius: 10px;
        cursor: pointer;
	`}
`;

export const GenreImage = styled.img`
	${({ theme }) => css`
        width: 100%;
        height: 100%;
	`}
`;
