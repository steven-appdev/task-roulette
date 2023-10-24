import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

export default function Tasks(props) {
  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#2f4d6a",
        padding: 10,
        marginVertical: 10,
      }}
    >
      <Card.Title
        title={props.title}
        titleStyle={{ fontWeight: "bold", color: "#edf2f7" }}
        subtitle={props.subtitle}
        subtitleStyle={{ fontWeight: "300", color: "#edf2f7" }}
      />
    </Card>
  );
}
