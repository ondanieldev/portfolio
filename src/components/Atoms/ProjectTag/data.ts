export const defaultColor = '#ffffff';

export const alphaValue = '20';

export const isHex = (color: string): boolean =>
  color.includes('#') && color.length === 7;
