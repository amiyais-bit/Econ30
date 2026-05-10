/// <reference types="vite/client" />

declare module "react-simple-maps" {
  import type * as React from "react";

  export type RsmGeography = {
    rsmKey: string;
    id?: string | number;
    properties?: { name?: string };
  };

  export const ComposableMap: React.FC<{
    projection?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }>;

  export const Geographies: React.FC<{
    geography: string;
    children: (arg: { geographies: RsmGeography[] }) => React.ReactNode;
  }>;

  export const Geography: React.FC<{
    geography: RsmGeography;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    onMouseMove?: (e: React.MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: () => void;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }>;
}
