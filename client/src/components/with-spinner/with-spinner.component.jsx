import React from "react";

import Spinner from '../spinner/spinner.component';

/**
 * @summary high order component to show loading before page render
 */
const WithSpinner = (WrapperComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrapperComponent {...otherProps} />
};

export default WithSpinner;
