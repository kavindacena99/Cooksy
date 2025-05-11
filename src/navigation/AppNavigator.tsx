import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title:'Recipe Detail'}} />
        <Stack.Screen name='About' component={AboutScreen} options={{ title:'About Us' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
