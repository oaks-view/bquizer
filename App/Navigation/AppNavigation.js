import React from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen  from '../Containers/HomeScreen';

const AppNavigation = StackNavigator(
	{
        HomeScreen: { screen: HomeScreen }
	},
	{
		initialRouteName: "HomeScreen",
		headerMode: "none"
	}
);

export default AppNavigation;
