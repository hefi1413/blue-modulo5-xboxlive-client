import styled, { css } from "styled-components";

export const GameCard = styled.div`
  ${() => css`
    width: 180px;
    height: 180px;
    border-radius: 05px;
    cursor: pointer;

    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #DDDDDD;

    :focus {
            box-shadow: 0 0 5px rgba(81, 203, 238, 1);
            padding: 3px 0px 3px 3px;
            margin: 5px 1px 3px 0px;
            border: 3px solid rgba(81, 203, 238, 1);
    }
	`}
`;

export const GameCardImageBox = styled.div`
	${() => css`
    width: 100%;
    height: 180px;
	`}
`;

export const GameCardImage = styled.img`
	${() => css`
        width: 100%;
        height: 100%;
        object-fit: cover;
	`}
`;

export const GameCardTitle = styled.h3`
	${({ theme }) => css`
        width: 100%;
        height: 30px;
        text-align: center;
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

/*
input[type=text] {
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid #DDDDDD;
}
 
input[type=text]:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(81, 203, 238, 1);
}
*/