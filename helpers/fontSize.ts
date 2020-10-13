import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const standardLength = width > height ? width : height;

const deviceHeight = isIphoneX()
	? standardLength - 78 
	: Platform.OS === "android"
	? standardLength - StatusBar?.currentHeight
	: standardLength;

export function RFPercentage(percent: number) {
	if (Platform.OS === "web") return percent;

	const heightPercent = (percent * deviceHeight) / 100;
	return Math.round(heightPercent);
}

export function RFValue(fontSize: number, standardScreenHeight: number = 680) {
	if (Platform.OS === "web") return fontSize;

	const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
	return Math.round(heightPercent);
}
