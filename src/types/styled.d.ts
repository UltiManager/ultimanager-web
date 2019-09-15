import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    containers: {
      width: {
        small: string;
        medium: string;
      };
    };
  }
}
