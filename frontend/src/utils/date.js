const convertDateToHuman = (d) => {
  const getMonthName = (x) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
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
    return month[x];
  };

  const date = new Date(d);
  const year = date.getFullYear();
  const month = getMonthName(date.getMonth());
  // const day = date.getDate();
  const dateString = `${month} ${year}`;
  return dateString;
};

export { convertDateToHuman };
