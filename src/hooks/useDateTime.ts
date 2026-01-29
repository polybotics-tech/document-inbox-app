const shortMonthList = [
  "Jan",
  "Feb",
  " Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function useDateTime() {
  //--functions

  return {
    formatDateToReadable: (datetime: Date) =>
      _handleFormatDateToReadable(datetime),
  };
}

const _handleFormatDateToReadable = (datetime: Date): string => {
  const dt = new Date(datetime);

  if (!dt) return "--unknown format--";

  const _pad = (str: string | number) => String(str).padStart(2, "0");

  return `${_pad(dt.getDate())} ${
    shortMonthList[dt.getMonth()]
  }, ${dt.getFullYear()}`;
};
