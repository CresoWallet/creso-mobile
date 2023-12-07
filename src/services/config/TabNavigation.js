import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { sizes } from '../utilities/sizes'
import Home from '../../screens/Home'
import { Image } from "react-native"
import images from '../utilities/images'
import DiscoverPage from '../../screens/DiscoverPage'
import SwapAndBridgeScr1 from '../../screens/SwapAndBridgeScr1'
import AccountInfo from '../../screens/AccountInfo'

const Tab = createBottomTabNavigator()

export default function TabNavigationComponent() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#2100EC',
                    width: sizes.screenWidth * 0.9,
                    height: sizes.screenHeight * 0.09,
                    position: 'absolute',
                    bottom: sizes.screenHeight * 0.02,
                    left: sizes.screenWidth * 0.05,
                    borderRadius: sizes.screenHeight * 0.05,
                    paddingHorizontal: sizes.screenWidth * 0.08,
                },
            }}
        >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            source={images.btmTab1}
                            style={{
                                width: sizes.screenWidth * 0.08,
                                height: sizes.screenWidth * 0.08,
                                tintColor: '#FFFFFF'
                            }}
                        />
                    ) : (
                        <Image
                            source={images.btmTab1}
                            style={{
                                width: sizes.screenWidth * 0.08,
                                height: sizes.screenWidth * 0.08,
                            }}
                        />
                    )
            }} />
            <Tab.Screen name='DiscoverPage' component={DiscoverPage} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            source={images.btmTab2}
                            style={{
                                width: sizes.screenWidth * 0.08,
                                height: sizes.screenWidth * 0.08,
                                tintColor: '#FFFFFF'
                            }}
                        />
                    ) : (
                        <Image
                            source={images.btmTab2}
                            style={{
                                width: sizes.screenWidth * 0.08,
                                height: sizes.screenWidth * 0.08,
                            }}
                        />
                    )
            }} />
            <Tab.Screen name='SwapAndBridgeScr1' component={SwapAndBridgeScr1} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            source={images.btmTab3}
                            style={{
                                width: sizes.screenWidth * 0.08,
                                height: sizes.screenWidth * 0.08,
                                tintColor: '#FFFFFF'
                            }}
                        />
                    ) : (
                        <Image
                            source={images.btmTab3}
                            style={{
                                width: sizes.screenWidth * 0.08,
                                height: sizes.screenWidth * 0.08,
                            }}
                        />
                    )
            }} />
            <Tab.Screen name='AccountInfo' component={AccountInfo} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            source={images.btmTab42}
                            style={{
                                width: sizes.screenWidth * 0.11,
                                height: sizes.screenWidth * 0.085,
                                // tintColor: '#FFFFFF'
                            }}
                        />
                    ) : (
                        <Image
                            source={images.btmTab4}
                            style={{
                                width: sizes.screenWidth * 0.11,
                                height: sizes.screenWidth * 0.085,
                            }}
                        />
                    )
            }} />
        </Tab.Navigator>
    )
}
