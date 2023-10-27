import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="Wallet"
        options={{
          title: "Wallet",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Nft"
        options={{
          title: "NFT",
          headerShown: false,

          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Browser"
        options={{
          title: "BROWSER",
          headerShown: false,

          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Swap"
        options={{
          title: "SWAP",
          headerShown: false,

          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Earn"
        options={{
          title: "EARN",
          headerShown: false,

          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
