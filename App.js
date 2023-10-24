import * as React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { PaperProvider, Appbar } from "react-native-paper";
import { Styles as styles } from "./Styles";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header dark style={{ backgroundColor: "#203446" }}>
        <Appbar.Content title="My Tasks" />
        <Appbar.Action icon="card-plus" onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollable}>
          <Tasks title="Task 1" subtitle="This is my task." />
          <Tasks title="Task 1" subtitle="This is my task." />
        </ScrollView>
      </View>
    </PaperProvider>
  );
}
