import { ReactNode } from 'react';
import { layoutContainerStyle } from './Layout.style';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div css={layoutContainerStyle}>{children}</div>;
};

export default Layout;
