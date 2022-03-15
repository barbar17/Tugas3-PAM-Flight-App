import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Home";
import JadwalScreen from "../screens/Jadwal";

const AppNavigator = createStackNavigator(
    {

        Home: {
            screen: HomeScreen,
        },
        JadwalScreen: {
            screen: JadwalScreen,
        }

    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    },
);

export default createAppContainer(AppNavigator);