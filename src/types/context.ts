export interface DateContextPayload {
  year: number;
  month: number;
  date: number;
  handleMonthClick: (type: "plus" | "minus") => void;
  handleTodayClick: () => void;
}

export interface AuthContextPayload {
  isLogin: boolean;
  handleIsLogin: () => void;
}
