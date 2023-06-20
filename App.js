import { Text } from "react-native";
import { useAssets } from "expo-asset";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./screens/SignIn";

const Stack = createStackNavigator();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      if (user) {
        setCurrentUser(user);
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <NavigationContainer>
      {currentUser == null || undefined ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="signIn" component={SignIn} />
        </Stack.Navigator>
      ) : (
        <Text>Hi user !</Text>
      )}
      {/* <Text className="text-5xl text-orange-500">Hi user !</Text> */}
    </NavigationContainer>
  );
}

function Main() {
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png")
  );

  if (!assets) {
    return <Text>Loading...</Text>;
  }
  return <App />;
}

export default Main;
