export const getCreationDate = (dateInSec) => {
  const utcSeconds = dateInSec;
  const d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  const date = new Date(d);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${day}/${month}/${year}`;
};
