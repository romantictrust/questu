import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import LoginScreen from "../../screens/LoginScreen";
import MainScreen from "../../screens/MainScreen";
import RegScreen from "../../screens/RegScreen";
import AchievementsScreen from "../../screens/AchievementsScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import QuestScreen from "../../screens/QuestScreen";
import QRScreen from "../../screens/QRScreen";
import { colorStyle } from "../../Styles";

export const LogTabs = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    RegScreen: {
      screen: RegScreen
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    headerMode: "none"
  }
);

export const QuestTabs = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  QuestScreen: {
    screen: QuestScreen
  },
  QRScreen: {
    screen: QRScreen
  }
});

export const QRTabs = createStackNavigator({
  QuestScreen: {
    screen: QuestScreen
  },
  QRScreen: {
    screen: QRScreen
  }
});

export const MainTabs = createBottomTabNavigator(
  {
    MainScreen: {
      screen: QuestTabs,
      initialRouteName: "MainScreen",
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      })
    },
    AchievementsScreen: {
      screen: AchievementsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="trophy" color={tintColor} size={24} />
        )
      })
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    headerMode: "none",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colorStyle.activeTintColor,
      activeBackgroundColor: colorStyle.activeBackgroundColor,
      inactiveTintColor: colorStyle.inactiveTintColor,
      style: {
        backgroundColor: colorStyle.tabBarBackground,
        height: 50
      }
    }
  }
);

export const AppStackNavigator = createStackNavigator(
  {
    LogTabs: { screen: LogTabs },
    MainTabs: { screen: MainTabs }
  },
  {
    index: 0,
    headerMode: "none",
    initialRouteName: "LogTabs",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;
