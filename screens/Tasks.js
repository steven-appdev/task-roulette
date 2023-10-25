import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { Card, Appbar } from "react-native-paper";
import { MainStyle, TaskStyle } from "../Stylesheet";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isRefreshing, setRefreshStatus] = useState(false);

  const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/steven-appdev/task-roulette/",
  });

  const onRefresh = useCallback(() => {
    setRefreshStatus(true);
    setTimeout(() => {
      setRefreshStatus(false);
    }, 2000);
  }, []);

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

      <ScrollView
        contentContainerStyle={[MainStyle.center, TaskStyle.container]}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={"white"}
          />
        }
      >
        {tasks.map((task) => (
          <Card key={task.id} style={TaskStyle.card} onPress={() => {}}>
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
