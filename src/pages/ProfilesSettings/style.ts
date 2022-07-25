import styled, { css } from "styled-components";

export const ProfilesSettings = styled.div`
	${({theme}) => css`
        display: flex;
		flex-direction: column;
		justify-content: center;
        align-items: center;
		background-color: ${theme.colors.baseBg1};
		width: 100%;
		height: 100vh;
		color: ${theme.colors.textColor};
	`}
`;

export const ProfilesSettingsContent = styled.main`
	${({theme}) => css`
        display: flex;
		flex-direction: column;
		justify-content: center;
        align-items: center;
		width: calc(100% - 90px);
		height: calc(100% - 90px);
		overflow: none;
		box-sizing: border-box;
		margin: 0 auto;
	`}
`;

export const ProfilesSettingsTitle = styled.h1`
	${() => css`
		margin-right: 30px;
		margin-top: 15px;
	`}
`;

export const ProfilesSettingsButton = styled.div`
	${({theme}) => css`
        display: flex;
		flex-direction: row nowrap;
		justify-content: flex-end;
        align-items: center;
		background-color: ${theme.colors.baseBg1};
		width: 100%;
		height: 60px;
	`}
`;

export const ProfilesSettingsButtonBox = styled.div`
	${() => css`
        display: flex;
		flex-direction: row nowrap;
		justify-content: center;
		width: 25%;
		height: 50px;
	`}
`;

export const ProfilesSettingsForm = styled.form`
`;

