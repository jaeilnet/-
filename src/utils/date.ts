interface IDate {
  year: number;
  month: number;
  day?: number;
}

export const getDate = ({ year, month, day }: IDate): Date => {
  return new Date(year, month - 1, day);
};

export const getDay = (date: number): string => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return days[date];
};
