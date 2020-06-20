import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { 
  firestore, 
  convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils';

import { updateCollections} from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

/**
 * @summary building path as /shop/:category.
 * telling react router dom that :categoryId is the param that we are linked to
 * @param match Automically passed as props as the parent in App.js is a Route
 */
class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    //whenever the collection ref updates or run the first time, will send us the 
    //collection items
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  //render in Route is a function where parameters of it is what the component will receive
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
          render={props => 
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          }           
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => 
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          }  
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
