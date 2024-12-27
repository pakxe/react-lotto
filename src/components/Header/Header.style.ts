import { css } from '@emotion/react';
import { Theme } from '@emotion/react/dist/declarations/src';
import WithTheme from '../../types/WithTheme';
import { TYPOGRAPHY } from '../../constants/typography';

const headerContainerStyle = ({ theme }: WithTheme) =>
  css({
    width: '100%',
    height: '64px',

    padding: '0 130px',

    color: theme.colors.gray1,
    ...TYPOGRAPHY.title,

    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

export { headerContainerStyle };
