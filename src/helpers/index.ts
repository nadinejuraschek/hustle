export const capitalize = (str: string): string => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const normalizeNumber = (value: string): RegExpMatchArray => {
  return value.match('^[0-9][0-9.]*$');
};
