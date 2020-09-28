import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
  isLoading: boolean;
}

const withLoadingState = (WrappedComponent: React.ElementType) => {
  const ComponentWithLoader = ({ isLoading, ...props }: Props) => {
    if (isLoading) {
      return (
        <Dimmer active>
          <Loader size="massive" />
        </Dimmer>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLoader;
};

export default withLoadingState;
