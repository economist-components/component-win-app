const timeout = 2000;
export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        slug: 'hello-world',
        title: 'hello world',
        flytitle: 'hello world flytitle',
        rubric: 'hello world rubric',
        content: [
          'this is paragraph 1',
          'this is paragraph 2',
          'this is paragraph 3',
        ],
        sectionName: 'politics',
        image: {
          src: {
            '1.0x': 'http://worldif.economist.com/assets/8a9ec1b43f9e@2x.jpg',
          },
          alt: 'hello world image',
        },
      });
    }, timeout);
  });
};
