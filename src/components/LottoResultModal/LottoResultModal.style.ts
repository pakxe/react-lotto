import { css } from '@emotion/react';
import { TYPOGRAPHY } from '../../constants/typography';
import WithTheme from '../../types/WithTheme';

const getBorder = ({ theme }: WithTheme) => `1px solid ${theme.colors.gray5}${theme.opacity['12']}`;

const tableStyle = ({ theme }: WithTheme) =>
  css({
    borderTop: getBorder({ theme }),
    borderBottom: getBorder({ theme }),

    width: '100%',
    textAlign: 'center',

    thead: {
      borderBottom: getBorder({ theme }),

      th: { ...TYPOGRAPHY.bodyBold },
    },

    tr: {
      borderBottom: getBorder({ theme }),
    },

    td: {
      padding: '8px 0',
    },
    th: {
      padding: '8px 0',
    },
  });

const lottoResultModalStyle = {
  tableStyle,
};

export { lottoResultModalStyle };
