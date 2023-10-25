import { StyleSheet } from "react-native";

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  appbar: {
    backgroundColor: "#203446",
  },
  textcolor: {
    color: "#edf2f7",
  },
});

const TaskStyle = StyleSheet.create({
  tasks: {
    paddingVertical: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#2f4d6a",
    padding: 10,
    marginVertical: 10,
  },
});

const AccountStyle = StyleSheet.create({
  account: {
    paddingVertical: 50,
  },
  detail: {
    paddingTop: 20,
  },
});

export { MainStyle, TaskStyle, AccountStyle };
