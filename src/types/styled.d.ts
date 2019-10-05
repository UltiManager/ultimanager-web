import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
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
