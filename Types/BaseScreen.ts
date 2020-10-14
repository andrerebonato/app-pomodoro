import { StackNavigationProp } from "@react-navigation/stack";

export interface BaseScreen {
	navigation: StackNavigationProp<any>;
	route: any;
}
