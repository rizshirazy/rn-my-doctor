const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  blue1: '#0066CB',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEFF0',
  white: '#FFFFFF',
  black: '#000000',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  disable: mainColors.grey3,
  white: mainColors.white,
  black: mainColors.black,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.white,
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
  card: {
    light: mainColors.green2,
    dark: mainColors.green1,
  },
};
