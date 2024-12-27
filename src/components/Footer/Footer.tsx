import { useTheme } from '@emotion/react';
import { footerContainerStyle } from './Footer.style';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Footer = ({ children }: Props) => {
  const theme = useTheme();

  return <footer css={footerContainerStyle({ theme })}>{children}</footer>;
};

export default Footer;
