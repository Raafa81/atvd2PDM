import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  useFonts
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { Loading } from './src/components/Loading';

import AuthNavigator from './src/navegations/authNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  })

  if (!fontsLoaded) {
    return (
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Loading />
          <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        </ThemeProvider>
      </NavigationContainer>
    );

  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthNavigator />
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      </ThemeProvider>
    </NavigationContainer>
  );
}