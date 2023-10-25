import * as React from "react";
import { BottomNavigation, PaperProvider } from "react-native-paper";
import Tasks from "./components/Tasks";
import Account from "./components/Account";

const TaskRoute = () => <Tasks />;
const AccountRoute = () => <Account />;

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "task", focusedIcon: "note" },
    { key: "account", focusedIcon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    task: TaskRoute,
    account: AccountRoute,
  });

  return (
    <PaperProvider theme={{ colors: { background: "#182735" } }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#203446" }}
        activeColor="black"
        inactiveColor="white"
        sceneAnimationEnabled
        sceneAnimationType="shifting"
        theme={{ colors: { secondaryContainer: "white" } }}
      />
    </PaperProvider>
  );
}
