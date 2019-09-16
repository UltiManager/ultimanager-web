import * as React from "react";
import { default as Loadable } from "react-loadable";

import ReactLoadableLoader from "./components/loaders/ReactLoadableLoader";

/**
 * Create a loadable version of a component.
 *
 * @param opts - The options to create the loadable with. At a minimum, the
 *     'loader' attribute containing the dynamic import must be specified.
 */
export const asLoadable = <Props>(
  opts: Omit<LoadableExport.OptionsWithoutRender<Props>, "loading">
): React.ComponentType<Props> & LoadableExport.LoadableComponent =>
  Loadable({
    loading: ReactLoadableLoader,
    ...opts
  });
