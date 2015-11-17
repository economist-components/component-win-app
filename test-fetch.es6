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
          sources: [
            { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
            { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
            { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
            { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
          ],
          alt: 'this is the image description',
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
          sources: [
            { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
            { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
            { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
            { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
          ],
          alt: 'this is the image description',
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
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
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
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
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
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
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
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
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
