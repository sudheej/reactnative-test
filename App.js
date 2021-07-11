import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { Avatar } from 'react-native-elements';
import Featured from './screens/components/Featured';
import VideoPlayer from './screens/components/VideoPlayer';

function truncate(str, n){
  return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};


const getFeaturedVideosAsync = async () => {
  try {
    let response = await fetch(
      'https://learningfunction.azurewebsites.net/api/HttpTrigger1?code=tSWUB6h0V0OgLaTCf/A9MLEaILbU0E2gaVFBvUyyC4m/cdmwdgiGaQ=='
    );
    let json = await response.json();
    //console.log(json)
    return json;
  } catch (error) {
    console.error(error);
  }
};

function Feed({navigation}) {

  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("Got activated")
    getFeaturedVideosAsync().then((result) => {
      setList(result)
    })
    
   // setList("Yummy")
  }, [])

  let startHeaderHeight = 80

  React.useEffect(() => {
    // Your code here


    if (Platform.OS == 'android') {
      startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }, []);


  return (

    <SafeAreaView style={styles.AndroidSafeArea} >
     
      <LinearGradient
        colors={['#edf3ff', 'white']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 20 }}>
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  }}
                />
              </View>
              <Text style={{ fontSize: 24, textAlign: 'left', alignItems: 'flex-end', color: '#0b0e34', fontWeight: '700', paddingHorizontal: 20, paddingTop: 20 }}>
                What do you want to learn today, Mani ?
              </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {list.map(x => {
                    return(
                  <Featured key={x._id} imageUri={{uri:x.thumbnail}} rating={parseInt(x.rating)} name={truncate(x.title,14)} onPress={ () =>  navigation.navigate('Video Player', {param: x.url}) } />  
                    )
                  })} 
                
                </ScrollView>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>Continue from where you have left</Text>
              </View>
            </View>

          </ScrollView>

        </View>

      </LinearGradient>

    </SafeAreaView>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{
        activeTintColor: '#0b0e34',
        inactiveTintColor: '#7d80a8'
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Featured',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Feed}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCourses"
        component={Feed}
        options={{
          tabBarLabel: 'My Courses',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="solution1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Main" component={MyTabs} options={{headerShown: false}} />
      <Stack.Screen name="Video Player" component={VideoPlayer} />
      </Stack.Navigator>
   
    </NavigationContainer>
  );
}
