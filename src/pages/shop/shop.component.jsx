import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

/**
 * @summary building path as /shop/:category.
 * telling react router dom that :categoryId is the param that we are linked to
 * @param match Automically passed as props as the parent in App.js is a Route
 */
class ShopPage extends React.Component {
  //componentDidMount is only called after the initial render
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  //render in Route is a function where parameters of it is what the component will receive
  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}         
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
