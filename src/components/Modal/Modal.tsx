import { Interpolation, useTheme } from '@emotion/react';
import { WithChildren } from '../../types/WithChildren';
import { modalContainerStyle, closeModalButtonStyle, dimmerStyle } from './Modal.style';
import Icon from '../Icon/Icon';
import { Theme } from '@emotion/react/dist/declarations/src';

// TODO: 리펙
type Props = WithChildren & {
  cssStyle?: Interpolation<Theme>;
  close: () => void;
  isOpen: boolean;
};

const Modal = ({ children, cssStyle, close, isOpen }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dimmer close={close}>
      <ModalContainer cssStyle={cssStyle} close={close}>
        {children}
      </ModalContainer>
    </Dimmer>
  );
};

function Dimmer({ children, close }: Omit<Props, 'cssStyle' | 'isOpen'>) {
  return (
    <div onClick={close} css={dimmerStyle}>
      {children}
    </div>
  );
}

function ModalContainer({ children, cssStyle, close }: Omit<Props, 'isOpen'>) {
  const theme = useTheme();

  return (
    <div css={[modalContainerStyle({ theme }), cssStyle]}>
      {children}
      <Icon name='x' onClick={close} css={closeModalButtonStyle} />
    </div>
  );
}

export default Modal;
