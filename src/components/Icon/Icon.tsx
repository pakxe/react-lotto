import { ComponentProps } from 'react';
import X from '../../assets/images/x.svg';

const iconList = {
  x: <X />,
} as const;

type Props = ComponentProps<'div'> & {
  name: keyof typeof iconList;
};

const Icon = ({ name, ...rest }: Props) => {
  return <div {...rest}>{iconList[name]}</div>;
};

export default Icon;
