import {
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import languageIcon from "../assets/lang-icon.png";
import dropdownIcon from "../assets/dropdown.png";
import welcomeImg from "../assets/welcome-img.png";
import DefaultButton from "../components/DefaultButton";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-10">
      <StatusBar style="auto" />

      {/* ------------------- Welcome Image --------------- */}
      <Image
        source={welcomeImg}
        className="h-[35%] aspect-square w-[35%] mb-8 rounded-full"
      />
      {/* ------------------- heading --------------- */}
      <Text className="font-bold text-gray-900 text-xl py-2">
        Welcome to WhatsApp Clone
      </Text>

      {/* ------------------- Subheading --------------- */}
      <Text className="text-sm text-center">
        Checkout the <Text className="text-cyan-700">source code</Text> and
        documentation of the app on my
        <Text className="text-cyan-700">GitHub Repository</Text>.
      </Text>

      {/* ------------------- CTA Button --------------- */}
      <DefaultButton buttonTitle={"Create an Account"} />

      {/*-------------------------- Language Button------------------------ */}
      <TouchableOpacity className="py-1 space-x-2 rounded-full mt-8 px-2 flex-row bg-stone-200/40 items-center justify-between">
        <Image
          source={languageIcon}
          className="h-5 w-5"
          style={{ tintColor: "#008069" }}
        />
        <Text className="text-sm font-semibold text-[#008069]">English</Text>
        <Image
          source={dropdownIcon}
          className="h-4 w-4"
          style={{ tintColor: "#008069" }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  widthFromDimension: {
    width: Dimensions.get("window").width,
  },
});
