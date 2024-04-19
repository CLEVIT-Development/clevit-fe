export const formatDate = (date: Date) => {
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
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
