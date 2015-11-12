const timeout = 2000;
function delay(milliseconds) {
  return new Promise((resolve) => (setTimeout(resolve, milliseconds)));
}

export default (url) => {
  if (/article/.test(url)) {
    return delay(timeout).then(() => ({
      json: () => ({
        slug: 'hello-world',
        title: 'hello world',
        flytitle: 'hello world flytitle',
        byline: 'hello world byline',
        bylineLocation: 'hello world byline location',
        publishDate: '2015-09-29T16:45:56.698Z',
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
      }),
    }));
  } else if (/homepage/.test(url)) {
    return delay(timeout).then(() => ({
      json: () => ({
        articles: [
          {
            teaserId: '1',
            link: '/article/hello-world',
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
          },
          {
            teaserId: '2',
            link: '/article/hello-world',
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
          },
          {
            teaserId: '3',
            link: '/article/hello-world',
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
          },
          {
            teaserId: '4',
            link: '/article/hello-world',
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
          },
        ],
      }),
    }));
  }
  return Promise.reject(new Error('404'));
};
