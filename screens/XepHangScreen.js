import React, {Component} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RankByMonth from '../components/RankByMonth';
import RankByYear from '../components/RankByYear';

const Tab = createMaterialTopTabNavigator();

export default class XepHangScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View>
        <ImageBackground source={{uri: "https://khenphim.com/wp-content/uploads/2020/12/Doraemon-2020-4-banner-e1607620367703.jpg"}} style={{ height: 300, maxWidth: 700, flex: 1 }} resizeMode="cover" />
      </View>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#eb0e0e',
            tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
            tabBarStyle: { 
              backgroundColor: '#fff',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: 280,
              },
            
          }}
          >
          <Tab.Screen
            name="Month"
            component={RankByMonth}
            options={{ tabBarLabel: 'Tháng' }}
          />
          <Tab.Screen
            name="Year"
            component={RankByYear}
            options={{ tabBarLabel: 'Năm' }}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});