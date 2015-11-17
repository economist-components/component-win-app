const timeout = 2000;
function delay(milliseconds) {
  return new Promise((resolve) => (setTimeout(resolve, milliseconds)));
}

export default (url) => {
  if (/article/.test(url)) {
    const articles = {
      1: {
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
        mainImage: {
          src: 'http://worldif.economist.com/assets/8a9ec1b43f9e@2x.jpg',
          alt: 'hello world image',
        },
      },
      2: {
        slug: 'hello-world-2',
        title: 'hello world 2',
        flytitle: 'hello world 2 flytitle',
        byline: 'hello world 2 byline',
        bylineLocation: 'hello world 2 byline location',
        publishDate: '2015-09-29T16:45:56.698Z',
        rubric: 'hello world 2 rubric',
        content: [
          'this is paragraph 1',
          'this is paragraph 2',
          'this is paragraph 3',
        ],
        sectionName: 'politics',
        mainImage: {
          src: 'http://worldif.economist.com/assets/8a9ec1b43f9e@2x.jpg',
          alt: 'hello world 2 image',
        },
      },
    };
    return delay(timeout).then(() => ({
      json: () => (articles[Math.floor(Math.random() * 2) + 1]),
    }));
  } else if (/homepage/.test(url)) {
    return delay(timeout).then(() => ({
      json: () => ({
        articles: [
          {
            teaserId: '1',
            link: {
              href: '/article/hello-world',
            },
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
              src: 'http://worldif.economist.com/assets/8a9ec1b43f9e@2x.jpg',
              alt: 'hello world image',
            },
          },
          {
            teaserId: '2',
            link: {
              href: '/article/hello-world',
            },
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
              src: 'http://worldif.economist.com/assets/8a9ec1b43f9e@2x.jpg',
              alt: 'hello world image',
            },
          },
          {
            teaserId: '3',
            link: {
              href: '/article/hello-world',
            },
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
              src: 'http://worldif.economist.com/assets/8a9ec1b43f9e@2x.jpg',
              alt: 'hello world image',
            },
          },
          {
            teaserId: '4',
            link: {
              href: '/article/hello-world',
            },
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
              src: 'http://worldif.economist.com/assets/8a9ec1b43f9e@2x.jpg',
              alt: 'hello world image',
            },
          },
        ],
      }),
    }));
  } else if (/menu/.test(url)) {
    /* eslint-disable */
    return delay(timeout).then(() => ({
      json: () => ({
        navigationItems: [
          {
            'title': 'Leaders',
            'slug': 'leaders',
            'navigationItems': [
              {
                'title': 'Leaders',
                'slug': 'leaders',
                'navigationItems': [
                  {
                    'id': 1,
                    'title': 'Who should lead the world',
                    'text': '',
                    'slug': 'this-is-a-slug-slurp-slurp',
                  },
                  {
                    'id': 2,
                    'title': 'Into Africa',
                    'text': '',
                    'slug': 'this-is-a-slug-slurp-slurp',
                  },
                ]
              }
            ]
          },
          {
            'title': 'World',
            'slug': 'world',
            'navigationItems': [
              {
                'title': 'Britain',
                'slug': 'britain',
                'navigationItems': [
                  {
                    'id': 10,
                    'title': 'Coalition, the Sequel',
                    'text': 'Hung Parliament',
                    'slug': 'this-is-a-slug-slurp-slurp',
                  },
                  {
                    'id': 11,
                    'title': 'After the referendum',
                    'text': 'What happens next for Scotland',
                    'slug': 'this-is-a-slug-slurp-slurp',
                  },
                ]
              },
            ],
          },
        ],
      }),
    }));
  }

  return Promise.reject(new Error('404'));
};
