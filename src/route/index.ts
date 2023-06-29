type RoutePath = "HOME" | "LOGIN" | "SCHEDULE";

export type RouteType = {
  [key in RoutePath]: string;
};

export const ROUTE: RouteType = {
  HOME: "/",
  LOGIN: "/auth/login",
  SCHEDULE: "/schedule",
};

export const HEADER_TITLE: RouteType = {
  HOME: "홈",
  LOGIN: "로그인",
  SCHEDULE: "일정 등록",
};
