import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

/**
 * @summary building path as /shop/:category.
 * telling react router dom that :categoryId is the param that we are linked to
 * @param match Automically passed as props as the parent in App.js is a Route
 */
const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  //render in Route is a function where parameters of it is what the component will receive
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

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
