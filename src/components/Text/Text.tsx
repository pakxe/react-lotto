import { WithChildren } from '../../types/WithChildren';
import { useTheme } from '@emotion/react';
import { ComponentProps } from 'react';
import { textStyle, TextStyleArgs } from './Text.style';

type Props = WithChildren & ComponentProps<'p'> & TextStyleArgs;

const Text = ({ type, color, textAlign, children }: Props) => {
  const theme = useTheme();

  return <p css={textStyle({ type, color, textAlign, theme })}>{children}</p>;
};

export default Text;
