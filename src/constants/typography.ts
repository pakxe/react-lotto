// 상수 파일은 변형될 가능성이 크므로 default export 를 사용하지 않음

export const TYPOGRAPHY = {
  title: {
    fontSize: '24px',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '600',
  },
  caption: {
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '15px',
    letterSpacing: '1.25px',
  },
  body: {
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  bodyBold: {
    fontSize: '15px',
    fontWeight: '600',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
} as const;
