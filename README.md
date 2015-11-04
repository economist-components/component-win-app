# component-win-app
> A World In App component

A `WorldInApp` is an `App` with a [`react-router-component`](https://github.com/STRML/react-router-component)
`Router` defined and passed in as its `content`.

An `App` is a composition of `{ AppContainer, AppHeader?, AppContentContainer, AppFooter? }`.
An `App` may receive some `content` as its `React.children`.

## TODO

#### `pipeline` (5 points):
- [ ] Make codeship work

#### `win-website` (8 points):
- [ ] server should output win-app. must import component-win-app
- [ ] `api-proxy` needs to be reviewed, merged and published
- [ ] composition of standard-server + connect-html + api-proxy + other middleware
- [ ] configurable

#### `component-win-header` (5 points):
- [ ] header is a composition of: win-logo, masthead, win-navigation, and sticky
- [ ] styling should be correct
- [ ] pass in the `navigationItems` from a server-side API call of win-website
- [ ] component-masthead (3 points):
  - [ ] moremenu is required (so probably must be updated to react 0.14.0)
  - [ ] develop + style the world in masthead, review it and get it published

##### `component-masthead`

###### `component-masthead/index.es6`
- [ ] Fix the improper `PropType`:
      https://github.com/the-economist-editorial/component-masthead/blob/master/index.es6#L11
- [ ] Add logo `PropType.shape`:
      https://github.com/the-economist-editorial/component-masthead/blob/master/index.es6#L6
- [ ] Microcomponent for logo:
      https://github.com/the-economist-editorial/component-masthead/blob/master/index.es6#L43-L51
- [ ] Rename to titleEl to distinguish from propType string:
      https://github.com/the-economist-editorial/component-masthead/blob/master/index.es6#L27
- [ ] Write tests.

#### `component-win-articlepage` (5 points):
- [ ] given an articleId, respond with an article, etc
- [ ] map `sectionName` --> `variantName` (1 points)
- [ ] effectively, a composition of win-articletemplate; asynccontainer is within parent app (4 points)

##### `component-win-articlepage`

###### `component-win-articlepage/index.es6`
- [ ] Pass some fake data into the article.
- [ ] Use Dan's component to fetch the data.
- [ ] Write tests.

###### `component-win-articlepage/index.css`
- [ ] Import the correct variant-group name styling.

#### `component-win-articletemplate`:
- [ ] fix issues and get PR merged and published (0 points)
- [ ] a function that given article, outputs article with advert object a N+1
      paragraph tag (3 points)
- [ ] instead of throwing an error a way to place an empty tag in place of an
      article inner component, for example a gobbet (3 points)

#### `component-win-homepage` (5 points):
- [ ] Russ's original work and styling should be reviewed and merged
- [ ] a data contract should exist between the drupal server and the component-win-homepage. Supported by API change
- [ ] a composition of async-container, component-win-teaser,
      component-win-teaser-list and the advertising component. Some must be PR’d and published
- [ ] if we have time, we should refactor towards sharing of style + logic

##### `component-win-homepage`

###### `component-win-homepage/index.es6`
- [ ] Look into helping Russ by creating a variant-specific `component-teaser-list`
      and `component-teaser` so that it is possible to specify a `heroic` teaser
      or whatever we're going to call it. A refactor.
- [ ] Use Dan's component to fetch the data.
- [ ] Write tests.

#### `component-win-app` (my own estimate: 1 points):
- [ ] a composition of component-win-header, component-win-homepage,
      component-win-articlepage; some are part of the routing, others are not
- [ ] stretch goal: potentially create and compose a component-win-footer

##### `component-win-app`

###### `component-win-app/index.es6`
- [ ] Move an icon back in:
      See: https://github.com/the-economist-editorial/component-win-app/blob/6c87920c0784ea720fba0a478696601c76ebbb22/index.es6#L42
- [ ] `<StickyMasthead> `should be used to help create the `<AppHeader>`. It will
      require fixes first. `header.es6` should probably expose this.
      This is how it used to be done:
      https://github.com/the-economist-editorial/component-win-app/blob/6c87920c0784ea720fba0a478696601c76ebbb22/index.es6#L38
- [ ] `header.es6` should use `component-win-navigation` which is should supply
      with some (1) fake data, and then (2) data received from calling the API
      on the server.
- [ ] Write tests.

###### `component-win-app/index.css`
- [ ] Most of the styling should be rewritten.

##### `component-win-navigation`

###### `component-win-navigation/index.es6`
- [ ] Generate urls from a two-pass transformation of the `navigationData` with
      the `routing` JSX of `react-router-component` as the paths.

#### `analytics` (2 points):
- [ ] component-win-app: `onNavigationChange` should call Omniture
