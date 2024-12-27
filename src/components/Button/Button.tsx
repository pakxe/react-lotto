import { ComponentProps, ReactNode } from 'react';
import { buttonStyle, ButtonStyleArgs } from './Button.style';
import { useTheme } from '@emotion/react';

type Props = ComponentProps<'button'> &
  ButtonStyleArgs & {
    children: ReactNode;
  };

const Button = ({ children, type, fullWidth, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <button {...rest} css={buttonStyle({ theme, type, fullWidth })}>
      {children}
    </button>
  );
};

export default Button;
