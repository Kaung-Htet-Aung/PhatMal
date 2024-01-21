import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, Dimensions, Switch } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import ForYouScreen from '../Screens/ForYouScreen';
import AuthorScreen from '../Screens/Author';
import DetailScreen from '../Screens/DetailScreen';
import FavouriteScreen from '../Screens/FavouriteScreen'
import ReportScreen from '../Screens/ReportScreen';
import SearchScreen from '../Screens/SearchScreen';
import SettingScreen from '../Screens/SettingScreen';
import AuthorBookScreen from '../Screens/AuthorBook';
import { useDispatch, useSelector } from 'react-redux';
import { setEnable } from '../store/action/theme';
import { Ionicons, MaterialIcons, FontAwesome5, Feather, FontAwesome } from '@expo/vector-icons';
const MainStack = createStackNavigator()
const HomeScreenStack = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import color from '../constants/colors';
const Tab = createMaterialTopTabNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const MainNavigator = ({ navigation }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.isEnabled);

    const [isEnabled, setisEnabled] = useState(true)

    const toggleSwitch = () => {
        setisEnabled(!isEnabled)
        dispatch(setEnable(isEnabled))
    }
   /*  const searchBook = (text) => {
        const searchedBook = books.filter(book => book.title.indexOf(text) > -1);
        set
    } */
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                    backgroundColor: theme ? color.white : color.primary,

                },

            }}>
                <MainStack.Screen
                    name="Tab"
                    component={TabScreen}
                    options={{
                        headerTitle: () => (
                            <View style={styles.right}>
                                <FontAwesome5 name="product-hunt" size={27} color={theme ? 'black' : color.white}  />
                                {/*  <TextInput placeholder="Search Here" style={styles.input} onChangeText={(text)=>searchBook(text)}/> */}
                                <View style={styles.title}>
                                    <Text>Thu Thu Phat Mal</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? color.white : color.primary}
                                    style={styles.switch}
                                    onChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        ),
                    }}

                />
                <MainStack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{
                        headerTintColor: color.white,
                        headerTitleStyle:{
                            fontFamily:'roboto'
                        }
                    }}

                />
                <MainStack.Screen
                    name="AuthorBook"
                    component={AuthorBookScreen}
                    options={{
                        headerTintColor: color.white,
                        headerTitleStyle:{
                            fontFamily:'roboto'
                        }
                    }}

                />

            </MainStack.Navigator>
        </NavigationContainer>

    )

}

const TabScreen = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.isEnabled);

    return (
        <Tab.Navigator
            initialLayout={{ width: Dimensions.get('window').width }}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                tabBarItemStyle: { width: 97, margin: 0 },
                //  tabBarScrollEnabled:true,
                tabBarStyle: { backgroundColor: theme ? color.white : color.primary },
                tabBarActiveTintColor: theme ? 'purple' : color.green,
                tabBarInactiveTintColor: theme ? 'gray' : color.white,
            }}

        >
            <Tab.Screen name="For You" component={BottomTabBar} />
            <Tab.Screen name="Author" component={AuthorScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    );
}
const BottomTabBar = () => {
    return (
        <BottomTab.Navigator
            activeColor="#a7ff83"
            inactiveColor="white"
            barStyle={{ backgroundColor: '#052454' }}
        >
            <BottomTab.Screen name="BookShelf" component={ForYouScreen} options={{
                tabBarIcon: ({ color }) => (

                    <Feather name="book-open" size={24} color={color} />
                )
            }} />
            <BottomTab.Screen name="Favourite" component={FavouriteScreen} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="star-half-full" size={24} color={color} />
                )
            }} />
            <BottomTab.Screen name="Report" component={ReportScreen} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="report" size={24} color={color} />
                )
            }} />

        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
   /*  input: {
        width: '70%',

        backgroundColor: '#7392c2',
        borderRadius: 50,
    }, */
    right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },
    title:{
        backgroundColor: '#7392c2',
        width:240,
        alignItems:'center',
        borderRadius:20,
        padding:7
    }

})
export default MainNavigator;