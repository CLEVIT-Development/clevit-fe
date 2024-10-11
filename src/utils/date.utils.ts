export const formatDate = (date: Date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getMonth = () => {
  return new Date().getMonth();
};

export const getDay = () => {
  return new Date().getDate();
};
