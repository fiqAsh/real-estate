import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text className="font-bold text-3xl font-rubik">Welcome eveyone</Text>

			<Link href="/sign-in">Sign in</Link>
			<Link href="/explore">explore</Link>
			<Link href="/profile">profile</Link>
			<Link href="/properties/1">property</Link>
		</View>
	);
};

export default Index;
