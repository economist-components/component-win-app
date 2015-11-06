import React, { PropTypes } from 'react';

export default class ArticlePage extends React.Component {
  static propTypes = {
    articleId: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { articleId, title } = this.props;
    return (
      <div>An article with id "{articleId}" and title "{title}" goes here.</div>
    );
  }
}
