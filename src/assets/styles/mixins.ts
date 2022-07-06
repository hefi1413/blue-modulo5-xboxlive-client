import { css } from 'styled-components';
import { colors } from './colors';
import { constants } from './constants';


const bodyStyle = () => css`
  font-family: ${constants.bodyFontFamily};
  font-size: ${constants.bodyFontSize};
  line-height: ${constants.bodyLineHeight};
`;

const logoStyle = () => css`
  font-family: ${constants.logoFontFamily};
  font-size: ${constants.logoFontSize};
  line-height: ${constants.logoLineHeight};
`;

const headingStyle = () => css`
  font-family: ${constants.headingFontFamily};
  font-size: ${constants.headingFontSize};
  line-height: ${constants.headingLineHeight};
`;

const input = () => css`
  height: 48px;
  border-radius: 8px;
  padding: 14px;
  background: ${colors.baseForm};
  border: 1px solid ${colors.baseLine};
  box-sizing: border-box;
`;

export const mixins = {
    bodyStyle,
    headingStyle,
    input,
    logoStyle,
}