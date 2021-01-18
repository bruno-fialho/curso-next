import Prismic from 'prismic-javascript';

export const apiEndpoind = 'https://devcommerce99.cdn.prismic.io/api/v2';

export const client = (req = null) => {
  const options = req ? { req } : null;

  return Prismic.client(apiEndpoind, options);
}