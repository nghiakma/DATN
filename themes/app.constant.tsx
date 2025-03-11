import { DimensionValue, Dimensions, PixelRatio, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

// Lấy kích thước màn hình
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;

// Kiểm tra hệ điều hành
export const IsIOS = Platform.OS === "ios";
export const IsAndroid = Platform.OS === "android";

// Kiểm tra notch (chỉ cần cho điện thoại)
export const hasNotch = IsIOS && getStatusBarHeight() > 20;

// Hàm tính chiều cao tương đối
export const windowHeight = (height: DimensionValue): number => {
  if (!height) {
    return 0;
  }
  let tempHeight = SCREEN_HEIGHT * (parseFloat(height.toString()) / 667);
  return PixelRatio.roundToNearestPixel(tempHeight);
};

// Hàm tính chiều rộng tương đối
export const windowWidth = (width: DimensionValue): number => {
  if (!width) {
    return 0;
  }
  let tempWidth = SCREEN_WIDTH * (parseFloat(width.toString()) / 375); // Thay đổi 480 thành 375 (kích thước phổ biến cho điện thoại)
  return PixelRatio.roundToNearestPixel(tempWidth);
};

// Định nghĩa kích thước font chữ
export const fontSizes = {
  FONT6: windowWidth(6),
  FONT7: windowWidth(7),
  FONT8: windowWidth(8),
  FONT9: windowWidth(9),
  FONT10: windowWidth(10),
  FONT11: windowWidth(11),
  FONT12: windowWidth(12),
  FONT13: windowWidth(13),
  FONT14: windowWidth(14),
  FONT15: windowWidth(15),
  FONT16: windowWidth(16),
  FONT17: windowWidth(17),
  FONT18: windowWidth(18),
  FONT19: windowWidth(19),
  FONT20: windowWidth(20),
  FONT21: windowWidth(21),
  FONT22: windowWidth(22),
  FONT23: windowWidth(23),
  FONT24: windowWidth(24),
  FONT25: windowWidth(25),
  FONT26: windowWidth(26),
  FONT27: windowWidth(27),
  FONT28: windowWidth(28),
  FONT30: windowWidth(30),
  FONT32: windowWidth(32),
  FONT35: windowWidth(35),
};