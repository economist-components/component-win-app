# component-win-app
> A World In App component

A `WorldInApp` is an `App` with a `react-router-component` `Router` defined
and passed in as its `content`.

An `App` is a composition of `{ AppContainer, AppHeader?, AppContent, AppFooter? }`.
An `App` make receive some `content` as its `React.children`.

## TODO

### `component-win-app`

#### `component-win-app/index.es6`
- [x] Find out why `onOpen` and `onClose` existed and the `state` that relates
      to them. Looks like they can probably be completely removed.
- [x] Try `static propTypes = {}` instead of the function call.
- [x] `PropTypes` destructured from the import.
- [x] Create `isBrowser` constant for searchability and consistency.
- [x] `scrollToTop` should probably be a function detached from the component.
- [x] The `routing` should be defined elsewhere alongside `scrollToTop`, and
      should expose itself as `<RouteHandler>` which can be placed within an
      `<AppContent>`.
- [x] The `index.es6` should compose an `<AppContainer>`, `<AppHeader>`, and
      `<AppContent>`.
- [x] `<AppContainer>` should contain a `<CaptureClicks>` surrounding everything
       hyperlinkable.
       It shouldn't have been removed.
       See: http://andreypopp.viewdocs.io/react-router-component/a-elements/
       See: https://github.com/the-economist-editorial/component-win-app/blob/6c87920c0784ea720fba0a478696601c76ebbb22/index.es6#L4
- [ ] Move an icon back in:
      See: https://github.com/the-economist-editorial/component-win-app/blob/6c87920c0784ea720fba0a478696601c76ebbb22/index.es6#L42
- [ ] `<StickyMasthead> `should be used to help create the `<AppHeader>`. It will
      require fixes first. `header.es6` should probably expose this.
      This is how it used to be done:
      https://github.com/the-economist-editorial/component-win-app/blob/6c87920c0784ea720fba0a478696601c76ebbb22/index.es6#L38
- [ ] `header.es6` should use `component-win-navigation` which is should supply
      with some (1) fake data, and then (2) data received from calling the API
      on the server.
- [ ] `handlers/{handler-name}.es6` should exist for `[ 'home', 'article' ]`.
      In fact, if not already each should be its own repo. Probably better.
      For example, see:
      https://github.com/economist-components/component-win-homepage
      See separate issues below.
- [ ] Lose the share icons styling and some other cruft which does not relate to us.
- [ ] Write tests.
- [ ] Import `component-win-articlepage` and `component-win-homepage` styling, etc.

#### `component-win-app/index.css`
- [x] Should not import storytiles css.
- [x] Should lose some of the styling related to the sharebar which will not
      exist.
- [ ] Probably most of the styling should be rewritten.

### `component-404`

#### `component-404/index.es6`
- [ ] Small commit of missing package.json code.

### `component-stickymasthead`

#### `component-stickymasthead/index.es6`
- [?] Upgrade to `react@0.14.0` and the newest stable devpack.
- [?] Upgrade to the latest `react-sticky`.
- [ ] Fix this incorrect `PropType`:
      https://github.com/the-economist-editorial/component-stickymasthead/blob/master/index.es6#L11
- [ ] Write tests.

#### `component-stickymasthead/index.css`

### `component-masthead`

#### `component-masthead/index.es6`
- [?] Upgrade to `react@0.14.0` and the newest stable devpack.
- [ ] Fix the improper `PropType`:
      https://github.com/the-economist-editorial/component-masthead/blob/master/index.es6#L11
- [ ] Add logo `PropType.shape`:
      https://github.com/the-economist-editorial/component-masthead/blob/master/index.es6#L6
- [ ] Microcomponent for logo:
      https://github.com/the-economist-editorial/component-masthead/blob/master/index.es6#L43-L51
- [ ] Rename to titleEl to distinguish from propType string:
      https://github.com/the-economist-editorial/component-masthead/blob/master/index.es6#L27
- [ ] Write tests.

#### `component-masthead/index.css`

### `component-win-articlepage`

### `component-win-articlepage/index.es6`
- [ ] Consider standardisation of a better name than articlepage, but whatever
    we do, be consistent with `component-homepage`.
- [ ] Link to your latest `component-articletemplate` or publish the latest version.
- [ ] Pass in the `variantName`. Map to this from the `sectionName`.
- [ ] Pass some fake data into the article.
- [ ] Use Dan's component to fetch the data.
- [ ] Write tests.

### `component-win-articlepage/index.css`
- [ ] Import the correct variant-group name styling.

### `component-articletemplate`

### `component-articletemplate/index.es6`
- [ ] Fix the issues raised in the PR.

### `component-win-homepage`

### `component-win-homepage/index.es6`
- [ ] Consider standardisation of a better name than homepage, but whatever
      we do, be consistent with `component-articlepage`.
- [ ] Look into helping Russ by creating a variant-specific `component-teaser-list`
      and `component-teaser` so that it is possible to specify a `heroic` teaser
      or whatever we're going to call it. A refactor.
- [ ] Look into advertising approach for both the articletemplate and the homepage.
      To begin with hardcode it at a specific point.
      Then use flex box to order it.
      Then create some wrapper logic to define programmable
      `<PlacementContainer>`s that can choose where to put an advertising
      element given some logic.
- [ ] Pass fake advertising and articles data in.
- [ ] Use Dan's component to fetch the data.
- [ ] Write tests.

### `component-win-navigation`

### `component-win-navigation/index.es6`
- [ ] Generate urls from a two-pass transformation of the `navigationData` with
      the `routing` JSX of `react-router-component` as the paths.
