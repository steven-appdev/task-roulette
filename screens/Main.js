import { useEffect, useState } from "react";
import { BottomNavigation, PaperProvider } from "react-native-paper";
import Tasks from "./Tasks";
import Account from "./Account";

export default function Main(props) {
  const TaskRoute = () => <Tasks />;
  const AccountRoute = () => <Account navigation={props.navigation} />;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "task", focusedIcon: "note" },
    { key: "account", focusedIcon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    task: TaskRoute,
    account: AccountRoute,
  });

  return (
    <PaperProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#203446" }}
        activeColor="black"
        inactiveColor="white"
        sceneAnimationEnabled
        sceneAnimationType="shifting"
        theme={{
          colors: { secondaryContainer: "white", background: "#182735" },
        }}
      />
    </PaperProvider>
  );
}
