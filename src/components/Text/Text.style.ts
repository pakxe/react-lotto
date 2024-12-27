import { Theme } from '@emotion/react/dist/declarations/src';
import { css } from '@emotion/react';
import { TYPOGRAPHY } from '../../constants/typography';
import WithTheme from '../../types/WithTheme';

/**
 * 컴포넌트가 받는 타입은 크게 스타일링과 관련된 타입과 props 타입으로 나뉜다.
 */

// color를 직접 정의하면 해당 컬러를 사용하고, 정의하지 않으면 테마 컬러를 사용한다.
// color?: 가 자주 사용됨에도 불구하고 타입으로 분리하지 않은 이유는 수정 가능성이 낮으며, TextStyle이 직관적이게 보이지 않을 수 있어서
export type TextStyleArgs = {
  color?: keyof Theme['colors'];
  textAlign?: 'left' | 'center' | 'right';
  type?: keyof typeof TYPOGRAPHY;
};

// theme를 받는 이유는, color가 없을경우 theme 컬러를 따라가기 위해서.
// 하지만 컴포넌트에서 수행하지 않고 style에서 수행하는 이유는 그냥 컴포넌트는 UI만 그리고 style파일은 스타일링만 하기 떄문임

const textStyle = ({ type, textAlign, color, theme }: WithTheme<TextStyleArgs>) =>
  css({
    color: color ? theme.colors[color] : theme.colors.text,

    textAlign,
    ...TYPOGRAPHY[type || 'body'],
  });

export { textStyle };
