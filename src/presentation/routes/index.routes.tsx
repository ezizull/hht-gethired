import { NavigationContainer } from '@react-navigation/native';
import { StackAuthTabs } from './auth.routes';
import { StackHomeTabs } from './home.routes';


export function AuthNavigation() {
    return (
        <NavigationContainer>
            <StackAuthTabs />
        </NavigationContainer>
    );
}

export function HomeNavigation() {
    return (
        <NavigationContainer>
            <StackHomeTabs />
        </NavigationContainer>
    );
}
