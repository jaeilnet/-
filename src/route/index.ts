type RoutePath = "HOME" | "LOGIN" | "SCHEDULE";
type RouteType = Record<RoutePath, string>;

export const ROUTE: RouteType = {
  HOME: "/",
  LOGIN: "/auth/login",
  SCHEDULE: "/schedule",
};
