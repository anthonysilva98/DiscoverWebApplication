import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import WalletButton from "../../components/Wallet/WalletButton";
import FiatDisplay from "../../components/Wallet/FiatDisplay";
const Wallet = () => {
  return (
    <SafeAreaView style={tw`bg-background`}>
      <View style={tw`justify-between items-center flex-row bg-gray-800 p-2`}>
        <Image
          source={require("../../assets/images/WalletAssets/slider.png")}
        />
        <Image
          source={require("../../assets/images/WalletAssets/qrscanner.png")}
        />
      </View>
      <View style={tw`pt-20 items-center`}>
        <View style={tw`flex-row justify-center`}>
          <Text style={tw`text-white font-semibold pr-5`}>TOTAL BALANCE</Text>
          <Image
            style={tw`size-10`}
            source={require("../../assets/images/WalletAssets/eye.png")}
          />
        </View>
        <Text style={tw`text-white pt-5`}>$ 44,346.95</Text>
      </View>
      <View style={tw`justify-center items-center flex-row p-10`}>
        <View style={tw`px-3`}>
          <View
            style={tw`bg-blue-500 h-20 w-20 rounded-full justify-center items-center`}
          >
            <WalletButton />
          </View>
        </View>
        <View style={tw`px-3`}>
          <View
            style={tw`bg-blue-500 h-20 w-20 rounded-full justify-center items-center`}
          >
            <WalletButton />
          </View>
        </View>
        <View style={tw`px-3`}>
          <View
            style={tw`bg-blue-500 h-20 w-20 rounded-full justify-center items-center`}
          >
            <WalletButton />
          </View>
        </View>
      </View>

      <ScrollView style={tw`bg-gray-800 h-200 mt-10 rounded-t-md`}>
        <View style={tw`pt-5`}>
          <FiatDisplay />
        </View>
        <FiatDisplay />
        <FiatDisplay />
        <FiatDisplay />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
