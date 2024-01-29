type RoutePath = "HOME" | "LOGIN" | "SCHEDULE" | "SIGNUP";

export type RouteType = {
  [key in RoutePath]: string;
};

export const ROUTE: RouteType = {
  HOME: "/",
  LOGIN: "/auth/login",
  SCHEDULE: "/schedule",
  SIGNUP: "/auth/signup",
};

export const HEADER_TITLE: RouteType = {
  HOME: "홈",
  LOGIN: "로그인",
  SCHEDULE: "일정 등록",
  SIGNUP: "회원가입",
};
