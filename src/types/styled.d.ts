import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      error: string;
      errorBackground: string;
      primary: string;
    };
    containers: {
      width: {
        small: string;
        medium: string;
      };
    };
  }
}
