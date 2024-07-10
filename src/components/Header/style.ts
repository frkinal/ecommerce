import {StyleSheet} from 'react-native';
import {SPACING, FONTFAMILY, FONTSIZE, COLORS} from 'src/theme/theme';
export default StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  Empty: {
    width: FONTSIZE.size_16,
  },
});
