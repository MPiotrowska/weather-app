export const getTodaysDate = () => {
  const date = new Date();
  const options = { month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-EN", options);
  return formattedDate;
};
