export enum PreloginRoutes {
  Contact = "/contact",
  Pricing = "/pricing",
}
export enum PreloginRouteNames {
  Contact = "Contact",
  Pricing = "Pricing",
}
export interface NavbarConstantInterface {
  route: PreloginRoutes;
  name: PreloginRouteNames;
}

export const navbarConstants: Array<NavbarConstantInterface> = [
  {
    name: PreloginRouteNames.Contact,
    route: PreloginRoutes.Contact,
  },
  {
    name: PreloginRouteNames.Pricing,
    route: PreloginRoutes.Pricing,
  },
];
