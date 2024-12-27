import { css } from '@emotion/react';
import WithTheme from '../../types/WithTheme';
import { TYPOGRAPHY } from '../../constants/typography';

const footerContainerStyle = ({ theme }: WithTheme) =>
  css({
    height: '80px',
    width: '100%',

    color: theme.colors.primary,
    ...TYPOGRAPHY.caption,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 'auto', // 남은 공간을 위쪽으로 밀어낸다. 공기를 밀어내는 것처럼...

    borderTop: `1px solid ${theme.colors.primary}${theme.opacity['20']}`,
  });

export { footerContainerStyle };
