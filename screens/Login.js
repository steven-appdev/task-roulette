import * as React from "react";
import { PaperProvider, Button, TouchableRipple } from "react-native-paper";
import { Text, View, TextInput } from "react-native";
import { MainStyle, LoginStyle } from "../Stylesheet";

export default function Login(props) {
  return (
    <PaperProvider>
      <View
        style={[MainStyle.center, MainStyle.backgroud, LoginStyle.container]}
      >
        <Text
          style={[MainStyle.textcolor, LoginStyle.title]}
          adjustsFontSizeToFit
        >
          Task Roulette
        </Text>
        <TextInput style={LoginStyle.input} placeholder="Username" />
        <TextInput
          style={LoginStyle.input}
          secureTextEntry
          placeholder="Password"
        />
        <TouchableRipple
          style={LoginStyle.button}
          onPress={() => {
            props.navigation.navigate("Main");
          }}
        >
          <Text style={MainStyle.textcolor}>Login</Text>
        </TouchableRipple>
      </View>
    </PaperProvider>
  );
}
