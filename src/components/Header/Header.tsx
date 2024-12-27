import { useTheme } from '@emotion/react';
import { ReactNode } from 'react';
import { headerContainerStyle } from './Header.style';

type Props = {
  left?: ReactNode;
  right?: ReactNode;
};

const Header = ({ left, right }: Props) => {
  const theme = useTheme();

  return (
    <header css={headerContainerStyle({ theme })}>
      {left}
      {right}
    </header>
  );
};

export default Header;
