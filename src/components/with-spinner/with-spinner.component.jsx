import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

/**
 * @summary high order component to show loading before page render
 */
const WithSpinner = (WrapperComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
