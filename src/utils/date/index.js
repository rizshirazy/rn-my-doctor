export const getChatTime = (date) => {
  const minutes = date.getMinutes();
  const hours = date.getHours();

  return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
};

export const setChatDate = (oldDate) => {
  const date = oldDate.getDate();
  const month = oldDate.getMonth() + 1;
  const year = oldDate.getFullYear();

  return `${year}-${month}-${date}`;
};
