declare module "*.svg" {
  import React from "react";
  const SVG: React.FunctionComponent<React.SVGProps<React.SVGElement>>;
  export default SVG;
}
