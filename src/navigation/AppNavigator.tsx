import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='RecipeDetail' component={RecipeDetailScreen} />
        
        {/* Add more screens here */}
        {/* Example: */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* More screens will be added later */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
