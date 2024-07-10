import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '@theme';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  innerContainer: {
    flex: 1,
  },
  formContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  navButton: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 20,
    color: COLORS.primaryOrangeHex,
  },
  textInputStyle: {
    fontSize: 17,
    color: COLORS.primaryRedHex,
    marginVertical: 10,
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputIcon: {
    alignSelf: 'center',
    color: COLORS.primaryGreyHex,
    marginHorizontal: 5,
  },
  button: {
    borderRadius: BORDERRADIUS.radius_10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryOrangeHex,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
