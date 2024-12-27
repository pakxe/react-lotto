import { css } from '@emotion/react';
import WithTheme from '../../types/WithTheme';

const dimmerStyle = () =>
  css({
    position: 'fixed',
    inset: 0,
    width: '100%',
    height: '100%',

    zIndex: 1,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

const bottomSheetContainerStyle = ({ theme }: WithTheme) =>
  css({
    position: 'relative',

    height: '500px',
    width: '350px',

    padding: '32px 16px',

    display: 'flex',
    flexDirection: 'column',

    backgroundColor: theme.colors.gray1,
  });

const closeModalButtonStyle = () =>
  css({
    position: 'absolute',
    top: '16px',
    right: '16px',
  });
export { dimmerStyle, bottomSheetContainerStyle, closeModalButtonStyle };
