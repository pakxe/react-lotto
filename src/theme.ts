// 라이트, 다크와 같은 특성의 테마에 따라 쉽게 바뀔 수 있는 값들을 위해 모아놓은 것

const colors = {
  primary: '#4E5BA6',
  text: '#000000',
  textOpposite: '#FFFFFF',
  gray1: '#FFFFFF',
  gray2: '#FCFCFD',
  gray3: '#B4B4B4',
  gray4: '#8B8B8B',
  gray5: '#000000',
} as const;

// TODO: 숫자로 관리하면 테마 변경 시 혼동이 있다. 수정요망
const opacity = {
  20: '33',
  12: '1E',
  50: '80',
};

const theme = {
  colors,
  opacity,
} as const;

export default theme;
