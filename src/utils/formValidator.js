export const areAllKeysFilled = (obj: any) => {
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      if (!obj[key]) {
        return false;
      }
    }
  }
  return true;
};
