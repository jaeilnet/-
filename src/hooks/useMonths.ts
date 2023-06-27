import { getDate } from "@/utils/date";

const useMonths = ({
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
}) => {
  const lastMonthDay = getDate({ year, month, day: 0 }).getDay();
  const startMonthDay = getDate({ year, month, day: 1 }).getDay();

  const lastMonth = getDate({ year, month, day: 0 }).getDate();
  const startMonth = getDate({ year, month, day: 1 }).getDate();

  const startMonthLastDay = getDate({
    year,
    month: month + 1,
    day: 0,
  }).getDate();

  const calendar = () => {
    let month = [];

    // 마지막 달 날짜와 날짜의 인덱스를 빼준다.
    // ex) 2023.6월 달력 기준 5월의 마지막날은 31일이고 요일의 인덱스 값은 3이다.
    // 31 - 3 = 28이므로 28일이 6월 달력의 첫주의 첫 날짜가 된다.
    let lastDay = lastMonth - lastMonthDay;
    let startDay = startMonth;
    for (let i = 1; i <= 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (lastDay <= lastMonth) {
          week.push(lastDay);
          lastDay += 1;
        } else if (startMonthLastDay <= startDay) {
          week.push(startMonthLastDay);
          startDay = 1;
        } else {
          week.push(startDay);
          startDay += 1;
        }
      }
      month.push(week);
    }

    return month;
  };

  return {
    lastMonth,
    startMonthDay,
    lastMonthDay,
    startMonth,
    startMonthLastDay,
    calendar,
  };
};

export default useMonths;
