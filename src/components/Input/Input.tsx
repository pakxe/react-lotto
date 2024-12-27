import { ComponentProps } from 'react';
import { inputStyle, InputStyleArgs } from './Input.style';
import { useTheme } from '@emotion/react';

type Props = ComponentProps<'input'> & InputStyleArgs;

const Input = ({ fullWidth, ...rest }: Props) => {
  const theme = useTheme();

  return <input {...rest} css={inputStyle({ theme, fullWidth })} />;
};

export default Input;
