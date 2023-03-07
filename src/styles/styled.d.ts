import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      [key: string]: string;
    };
    colors: {
      [key: string]: string | "accent" | "background";
    };
    variants: {
      [key: string]: string;
    };
    breakpoints: {
      [key: string]: string;
    };
    devices: {
      [key: string]: string;
    };
  }
}
