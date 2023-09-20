/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: '%s - 서비스 페이지',
  openGraph: {
    type: 'website',
    site_name: '건강증진센터 위치보기 서비스',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: '641b00e8a88e9be443aad60ded3042f7341e8ac5',
    },
    {
      name: 'google-site-verification',
      content: 'bWNew2pLfbzyEOA0sL8hLSno9dFXOwyUQMUT8MC6eGE',
    },
  ],
};
