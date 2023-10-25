import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Card, Appbar } from "react-native-paper";
import { MainStyle, TaskStyle } from "../Stylesheet";
import axios from "axios";

export default function Tasks(props) {
  const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/steven-appdev/task-roulette/",
  });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      let response = await api.get("tasks");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <View style={MainStyle.container}>
      <Appbar.Header dark style={MainStyle.appbar}>
        <Appbar.Content title="My Tasks" />
        <Appbar.Action icon="note-plus" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={[MainStyle.center, TaskStyle.tasks]}>
        {tasks.map((task) => (
          <Card style={TaskStyle.card} onPress={() => {}} key={tasks.id}>
            <Card.Title
              title={"Task " + task.id}
              titleStyle={[MainStyle.textcolor, { fontWeight: "bold" }]}
              subtitle={task.description}
              subtitleStyle={[MainStyle.textcolor, { fontWeight: "300" }]}
            />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
