import {StatusBar} from 'expo-status-bar';
import {NavigationContainer, NavigationProp} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from './screens/AllExpenses';
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from '@expo/vector-icons'
import IconButton from "./components/UI/IconButton/IconButton";
import {Provider} from "react-redux";
import {store} from "./store/store";

export type RootStackParamList = {
    ExpensesOverview: undefined
    ManageExpenses: {
        id?: string
    }
}
const Stack = createNativeStackNavigator<RootStackParamList>()

export type BottomTabParamList = {
    RecentExpenses: undefined
    AllExpenses: undefined
}
const Bottom = createBottomTabNavigator<BottomTabParamList>()


interface Prop {
    navigation: NavigationProp<RootStackParamList, 'ManageExpenses'>
}

function ExpensesOverview() {
    return <Bottom.Navigator
        screenOptions={({navigation}: Prop) => ({
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarInactiveTintColor: 'white',
            headerRight: ({tintColor}) => <IconButton icon={'add'} size={24} color={tintColor!}
                                                      onPress={() => navigation.navigate('ManageExpenses', {})}/>
        })}
    >
        <Bottom.Screen
            name={"RecentExpenses"}
            component={RecentExpenses}
            options={{
                title: 'Recent Expenses',
                tabBarLabel: 'Recent',
                tabBarIcon: ({color, size}) => <Ionicons name={'hourglass'} size={size} color={color}/>
            }}
        />
        <Bottom.Screen
            name={"AllExpenses"}
            component={AllExpenses}
            options={{
                title: 'All Expenses',
                tabBarLabel: 'All',
                tabBarIcon: ({color, size}) => <Ionicons name={'calendar'} size={size} color={color}/>
            }}
        />
    </Bottom.Navigator>
}


export default function App() {
    return (
        <Provider store={store}>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                    headerTintColor: 'white',
                }}>
                    <Stack.Screen name={"ExpensesOverview"} options={{headerShown: false}}
                                  component={ExpensesOverview}/>
                    <Stack.Screen name={"ManageExpenses"} component={ManageExpenses}
                                  options={{
                                      presentation: 'modal',
                                  }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

