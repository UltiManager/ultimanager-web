import * as React from "react";
import Loader from "./Loader";
import LoadingComponentProps = LoadableExport.LoadingComponentProps;

/**
 * A loader for components loaded by react-loadable.
 *
 * This differs from the standard loader in that it waits to render the loading
 * message until the delay provided by react-loadable has passed, and it can
 * render error messages.
 *
 * @param error - The error that occurred when attempting to load a component.
 * @param pastDelay - A boolean indicating if the delay before rendering has
 *     elapsed.
 * @param retry - A callback function to retry the loading of the component.
 */
const ReactLoadableLoader: React.FunctionComponent<LoadingComponentProps> = ({
  error,
  pastDelay
}) => {
  if (error) {
    return <p>Failed to load component.</p>;
  }

  if (!pastDelay) {
    return null;
  }

  return <Loader />;
};

export default ReactLoadableLoader;
