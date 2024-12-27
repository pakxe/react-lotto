import { css } from '@emotion/react';
import RADIUS from '../../constants/radius';
import WithTheme from '../../types/WithTheme';
import { TYPOGRAPHY } from '../../constants/typography';

type ButtonType = 'primary' | 'secondary';

export type ButtonStyleArgs = {
  type?: ButtonType; // TODO: 타입에 맞게 스타일 코드 짜야한다.
  fullWidth?: boolean;
};

const buttonStyle = ({ type, fullWidth, theme }: WithTheme<ButtonStyleArgs>) =>
  css({
    borderRadius: RADIUS.small,

    ...getButtonTypeStyle({ type: type ?? 'primary', theme }),
    padding: '8px 14px',

    ...TYPOGRAPHY.caption,

    height: '36px',
    width: fullWidth ? '100%' : 'auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    wordBreak: 'keep-all',
  });

const getButtonTypeStyle = ({ type, theme }: WithTheme & Required<Pick<ButtonStyleArgs, 'type'>>) => {
  const buttonTypeStyle = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.gray1,
    },
    secondary: {
      backgroundColor: theme.colors.gray3,
      color: theme.colors.gray5,
    },
  };

  return buttonTypeStyle[type];
};

export { buttonStyle };
