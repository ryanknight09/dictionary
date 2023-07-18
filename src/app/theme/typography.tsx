const getTypography = (font: string) => ({
  fontFamily: font,
  h1: {
    fontWeight: 700,
    fontSize: '4rem',
    lineHeight: 'normal',
  },
  h2: {
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 'normal',
  },
  h3: {
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: 'normal',
  },
  body1: {
    fontWeight: 500,
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  body2: {
    fontWeight: 400,
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
  },
  button: {
    fontWeight: 400,
    fontSize: '.875rem',
    lineHeight: 'normal',
  },
});

export default getTypography;
