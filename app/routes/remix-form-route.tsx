import type { HeadersFunction } from "@remix-run/node";
import { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [
  // your meta here
];

export const handle = () => ({
  // your handler here
});

export const headers: HeadersFunction = () => (
  {
    // your headers here
  }
);

export default function RouteComponent(){
  return (
    <div />
  );
}