import React from "react";
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}