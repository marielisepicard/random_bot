export const convertTimestamp = (timestamp) => {
  const fixLength = (i) => (i.length === 1 ? "0" + i : i),
    date = new Date(parseInt(timestamp));

  let h = fixLength(date.getHours().toString()),
    m = fixLength(date.getMinutes().toString()),
    s = fixLength(date.getSeconds().toString()),
    ms = fixLength(date.getMilliseconds().toString());

  return h + ":" + m + ":" + s + "." + ms;
};

export const errorMessage = () =>
  "Oops. Something weng wrong... You should come back later.";
