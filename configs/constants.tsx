import { Dimensions, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
//@ts-ignore
import OneBoarding from "@/assets/images/onboarding/1.png";
//@ts-ignore
import TwoBoarding from "@/assets/images/onboarding/2.png";
//@ts-ignore
import ThreeBoarding from "@/assets/images/onboarding/3.png";



export const onBoardingSlides: onBoardingSlidesTypes[] = [
    {
      color: "#40E0D0",
      title: "Khám phá",
      image: (
        <Image
          source={OneBoarding}
          style={{
            width:  verticalScale(320),
            height: verticalScale(330),
          }}
        />
      ),
      secondTitle: "Cộng đồng của chúng tôi",
      subTitle:
        "Tìm khóa học phù hợp để nâng cao triển vọng nghề nghiệp và kỹ năng của bạn",
    },
    {
      color: "#A7F893",
      title: "Đặt mục tiêu",
      image: (
        <Image
          source={TwoBoarding}
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
          source={ThreeBoarding}
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