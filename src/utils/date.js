export const dateToPersian = (date) => {
  const readbleDate = `${date?.year}/${date?.month}/${date?.day}`;
  return readbleDate;
};

export function separate(Number) {
  let x, y, z;
  Number += "";
  Number = Number.replace("/", "");
  x = Number.split(".");
  y = x[0];
  z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{2})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "/" + "$2");
  return y + z;
}

export const formatData = (date) => {
  const day = date?.slice(date?.length - 2, date?.length);
  const month = date?.slice(date?.length - 4, date?.length - 2);
  const year = date?.slice(0, date?.length - 4);
  return `${year}/${month}/${day}`;
};
