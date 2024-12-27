import { css } from '@emotion/react';
import RADIUS from '../../constants/radius';
import WithTheme from '../../types/WithTheme';

export type InputStyleArgs = {
  fullWidth?: boolean;
};

const inputStyle = ({ fullWidth, theme }: WithTheme<InputStyleArgs>) =>
  css({
    height: '36px',
    width: fullWidth ? '100%' : '34px',

    border: `1px solid ${theme.colors.gray3}`,
    borderRadius: RADIUS.small,

    padding: '0.5rem',
  });

export { inputStyle };
