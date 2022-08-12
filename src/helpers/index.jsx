export const capitalize = str => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const normalizeNumber = value => {
  return value.match('^[0-9][0-9.]*$');
};
