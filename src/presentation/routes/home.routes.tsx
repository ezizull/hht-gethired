import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackHomeStyles } from './home.styles';
import { page } from './names';
import ProductPage from '../pages/product';
import HomePage from '../pages/home';


const Stack = createNativeStackNavigator();
export function StackHomeTabs() {
  return (
    <Stack.Navigator initialRouteName={page.home} screenOptions={StackHomeStyles}>
      <Stack.Screen name={page.home} component={HomePage} />
      <Stack.Screen name={page.product} component={ProductPage} />
    </Stack.Navigator>
  );
}