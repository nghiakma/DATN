import { Dimensions, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
//@ts-ignore
import One from "../assets/images/onboarding/character-1.png";
//@ts-ignore
import Two from "../assets/images/onboarding/character-2.png";
//@ts-ignore
import Three from "../assets/images/onboarding/character-3.png";



export const onBoardingSlides: onBoardingSlidesTypes[] = [
    {
      color: "#40E0D0",
      title: "Khám phá",
      image: (
        <Image
          source={One}
          style={{
            width:  verticalScale(320),
            height: verticalScale(330),
          }}
        />
      ),
      secondTitle: "cộng đồng tri thức",
      subTitle:
        "Tìm khóa học phù hợp để nâng cao triển vọng nghề nghiệp và kỹ năng của bạn",
    },
    {
      color: "#A7F893",
      title: "Đặt mục tiêu",
      image: (
        <Image
          source={Two}
          style={{
            width:  scale(320),
            height: verticalScale(330),
          }}
        />
      ),
      secondTitle: "Của riêng bạn",
      subTitle:
        "Cá nhân hóa kế hoạch học tập của bạn với thời gian linh hoạt phù hợp nhất",
    },
    {
      color: "#FFC0CB",
      image: (
        <Image
          source={Three}
          style={{
            width:  scale(320),
            height: verticalScale(330),
          }}
        />
      ),
      title: "Hoàn thành",
      secondTitle: "Khóa học",
      subTitle:
        "Đạt được chứng chỉ bằng cách hoàn thành các khóa học với nỗ lực cống hiến",
    },
  ];

//Snap points: Là những điểm mà nội dung sẽ "dính" hoặc "gắn" vào khi được di chuyển hoặc vuốt. Các điểm snap này được xác định cho cả hai hướng trái và phải.
// Side Enum: Enum Side có thể dùng để xác định hướng di chuyển của nội dung (trái, phải hoặc không có).
// Lề và Khoảng Cách: Các hằng số như MIN_LEDGE, MARGIN_WIDTH giúp xác định khoảng cách giữa các phần tử và các cạnh của màn hình.

export enum Side {
    LEFT,
    RIGHT,
    NONE,
  }
export const MIN_LEDGE = 25;
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
export const MARGIN_WIDTH = MIN_LEDGE + 50;
export const PREV = WIDTH;
export const NEXT = 0;
export const LEFT_SNAP_POINTS = [MARGIN_WIDTH, PREV];
export const RIGHT_SNAP_POINTS = [NEXT, WIDTH - MARGIN_WIDTH];