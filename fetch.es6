const timeout = 2000;
export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ title: 'hello world' });
    }, timeout);
  });
};
