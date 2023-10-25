import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { MainStyle, AccountStyle } from "../Stylesheet";
import axios from "axios";

export default function Account({ navigation }) {
  const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/steven-appdev/task-roulette/",
  });

  const [profile, setProfile] = useState([]);

  const logoutAlert = () => {
    Alert.alert("Logging out?", "Are you sure you want to log out?", [
      { text: "Yes", onPress: () => navigation.navigate("Login") },
      { text: "No", style: "cancel" },
    ]);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      let response = await api.get("profile");
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  return (
    <View style={MainStyle.container}>
      <Appbar.Header dark style={MainStyle.appbar}>
        <Appbar.Content title="My Account" />
        <Appbar.Action
          icon="logout-variant"
          onPress={() => {
            logoutAlert();
          }}
        />
      </Appbar.Header>
      <View style={[MainStyle.center, AccountStyle.container]}>
        <Avatar.Image
          size={128}
          source={{
            uri: "https://i.pinimg.com/564x/b0/fb/ce/b0fbcec62546221e88a1cab6d061e9d3.jpg",
          }}
        />
        <View style={AccountStyle.detail}>
          <Text style={[MainStyle.textcolor, { fontSize: 24 }]}>
            {"@" + profile.username}
          </Text>
        </View>
      </View>
    </View>
  );
}
