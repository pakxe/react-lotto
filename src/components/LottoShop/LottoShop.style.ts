import { css } from '@emotion/react';
import RADIUS from '../../constants/radius';
import WithTheme from '../../types/WithTheme';

const lottoShopContainerStyle = ({ theme }: WithTheme) =>
  css({
    width: '414px',
    maxHeight: '727px',

    border: `1px solid ${theme.colors.gray5}${theme.opacity['12']}`,
    borderRadius: RADIUS.small,

    padding: '32px 16px',
    marginTop: 'auto',
  });


export { lottoShopContainerStyle };
