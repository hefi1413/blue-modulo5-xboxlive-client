import styled, { css } from "styled-components";

export const ProfileCard = styled.div`
	${() => css`
        width: 160px;
        height: 190px;
        border:0px solid black;
        border-radius: 08px;
        cursor: pointer;
	`}
`;

export const ProfileCardImageBox = styled.div`
	${() => css`
        width: 100%;
        height: 160px;
	`}
`;

export const ProfileCardImage = styled.img`
	${() => css`
        width: 100%;
        height: 100%;
	`}
`;

export const ProfileCardTitle = styled.h3`
	${({ theme }) => css`
        width: 100%;
        height: 30px;
        text-align: center;
	`}
`;

