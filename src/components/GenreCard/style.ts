import styled, { css } from "styled-components";

export const GenreCard = styled.div`
   ${() => css`
      width: 320px;
      height: 230px;
      border-radius: 05px;
      cursor: pointer;

      -webkit-transition: all 0.30s ease-in-out;
      -moz-transition: all 0.30s ease-in-out;
      -ms-transition: all 0.30s ease-in-out;
      -o-transition: all 0.30s ease-in-out;
      outline: none;
      padding: 3px 0px 3px 3px;
      margin: 5px 1px 3px 0px;
      border: 0px solid #DDDDDD;
        
      :focus {
         box-shadow: 0 0 5px rgba(81, 203, 238, 1);
         padding: 3px 0px 3px 3px;
         margin: 5px 1px 3px 0px;
         border: 3px solid rgba(81, 203, 238, 1);
      }
   `}
`;

export const GenreCardImageBox = styled.div`
	${({ theme }) => css`
        width: 100%;
        height: 180px;
	`}
`;

export const GenreCardImage = styled.img`
	${() => css`
        width: 100%;
        height: 100%;
        object-fit: cover;
	`}
`;

export const GenreCardTitle = styled.h3`
	${({ theme }) => css`
        width: 100%;
        text-align: center;
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
