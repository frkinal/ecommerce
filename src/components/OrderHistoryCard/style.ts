import {StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from 'src/theme/theme';
export default StyleSheet.create({
  CardContainer: {
    gap: SPACING.space_10,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  HeaderSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: 'flex-end',
  },
  HeaderPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  ListContainer: {
    gap: SPACING.space_20,
  },
});
