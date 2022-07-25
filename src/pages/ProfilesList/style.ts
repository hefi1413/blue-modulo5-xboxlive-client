import styled, { css } from "styled-components";

export const ProfilesList = styled.div`
	${() => css`
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap:20px;
		width: 100%;
		height: 30%; //500px;
  		overflow-y: auto;
		margin-top: 10px;
		padding: 05px;
		border:0px solid red;
	`}
`;
