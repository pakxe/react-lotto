import { Interpolation, useTheme } from '@emotion/react';
import { WithChildren } from '../../types/WithChildren';
import { bottomSheetContainerStyle, closeModalButtonStyle, dimmerStyle } from './BottomSheet.style';
import Icon from '../Icon/Icon';
import { Theme } from '@emotion/react/dist/declarations/src';

// TODO: 리펙
type Props = WithChildren & {
  cssStyle?: Interpolation<Theme>;
  closeBottomSheet: () => void;
};

const BottomSheet = ({ children, cssStyle, closeBottomSheet }: Props) => {
  return (
    <Dimmer>
      <BottomSheetContainer cssStyle={cssStyle} closeBottomSheet={closeBottomSheet}>
        {children}
      </BottomSheetContainer>
    </Dimmer>
  );
};

function Dimmer({ children }: WithChildren) {
  return <div css={dimmerStyle}>{children}</div>;
}

function BottomSheetContainer({ children, cssStyle, closeBottomSheet }: Props) {
  const theme = useTheme();

  return (
    <div css={[bottomSheetContainerStyle({ theme }), cssStyle]}>
      {children}
      <Icon name='x' onClick={closeBottomSheet} css={closeModalButtonStyle} />
    </div>
  );
}

export default BottomSheet;
