export const isSameDay = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const fullDate1 = `${date1.getFullYear()}/${date1.getMonth()}/${date1.getDate()}`;
  const fullDate2 = `${date2.getFullYear()}/${date2.getMonth()}/${date2.getDate()}`;

  if (fullDate1 === fullDate2) {
    return true;
  } else {
    return false;
  }
};

export const daysTill = (d) => {
  const difference = new Date(d).getTime() - new Date().getTime();
  const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};
