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
  backgroud: {
    backgroundColor: "#182735",
  },
});

const TaskStyle = StyleSheet.create({
  container: {
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
  container: {
    paddingVertical: 50,
  },
  detail: {
    paddingTop: 20,
  },
});

const LoginStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#edf2f7",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  button: {
    width: "90%",
    marginTop: 30,
    padding: 10,
    backgroundColor: "#203446",
    alignItems: "center",
    borderRadius: 15,
  },
});

export { MainStyle, TaskStyle, AccountStyle, LoginStyle };
