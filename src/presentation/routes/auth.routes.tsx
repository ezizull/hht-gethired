import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackAuthStyles } from './auth.styles';
import { page } from './names';
import LoginPage from '../pages/login';


const Stack = createNativeStackNavigator();
export function StackAuthTabs() {
    return (
        <Stack.Navigator initialRouteName={page.login} screenOptions={StackAuthStyles} >
            <Stack.Screen name={page.login} component={LoginPage} />
        </Stack.Navigator>
    );
}