export interface RouteInterface {
  id: number;
  element: JSX.Element;
  path: string;
}

export interface HeroInterface {
  /*** Page title */
  title: string;
  /*** current Page title */
  currentPage: string;
  /***  link to page */
  link?: string;
}
