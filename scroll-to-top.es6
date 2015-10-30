export default () => {
  const isBrowser = typeof window !== 'undefined' && window.document;
  if (isBrowser) {
    window.scrollTo(0, 0);
  }
};
