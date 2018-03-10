import React from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen  from '../Containers/HomeScreen';
import QuizScreen from '../Containers/QuizScreen';

const AppNavigation = StackNavigator(
	{
        HomeScreen: { screen: HomeScreen },
        QuizScreen: { screen: QuizScreen }
	},
	{
		initialRouteName: "HomeScreen",
		headerMode: "none"
	}
);

export default AppNavigation;
