import React from 'react'
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Free from '../screens/free'
import Daily from '../screens/daily';
import Weekly from '../screens/weekly';
import Monthly from '../screens/monthly';
import Header from '../Header'

const TabNavigator = createMaterialTopTabNavigator(
    {
        Free: {
            screen: Free
        },
        Daily: {
            screen: Daily
        },
        Weekly: {
            screen: Weekly
        },
        Monthly: {
            screen: Monthly
        },
    },
    {
        tabBarComponent: Header,
        tabBarOptions: {
            activeTintColor: "#191970",
            inactiveTintColor: "#696969"
        },
        initialRouteName: "Daily"
    }
);

const Navigation = createAppContainer(TabNavigator);

export default Navigation;