import { Text, TouchableOpacity } from "react-native";
import React from "react";

const DefaultButton = ({ buttonTitle }) => {
  return (
    <TouchableOpacity className="bg-green-800 my-6 w-[70%] rounded-full py-1.5 px-4 justify-center items-center">
      <Text className="text-base text-white font-semibold">{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
