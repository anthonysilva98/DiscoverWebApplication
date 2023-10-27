import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const FiatDisplay = () => {
  return (
    <View style={tw`p-3 pt-10 border-b rounded-b-xl border-gray-500`}>
      <View style={tw`flex-row`}>
        <Image
          style={tw`h-10 w-10`}
          source={require("../../assets/images/FiatAssets/Etherium.png")}
        />
        <View style={tw`justify-between flex-1`}>
          <View style={tw`flex-row px-2 py-1 justify-between`}>
            <Text style={tw`text-white `}>BitCoin</Text>
            <Text>0 BTC</Text>
          </View>
          <View style={tw`flex-row justify-between pr-2`}>
            <Text style={tw`px-2`}>$22435,45</Text>
            <Image
              style={tw`h-3 aspect-auto`}
              source={require("../../assets/images/FiatAssets/Positive.png")}
            />
            <Text>$ 0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FiatDisplay;
