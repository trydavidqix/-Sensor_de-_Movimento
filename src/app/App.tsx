import { useState, useEffect} from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const handleChangeToggle = () => setToggle((oldToggle) => !oldToggle);
  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle((oldToggle) => !oldToggle)
    });
    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? styles.lightingOn : styles.lightingOff}
          source={
            toggle
              ? require("../../assets/icons/eco-light.png")
              : require("../../assets/icons/eco-light-off.png")
          }
        />

        <Image
          style={styles.dioLogo}
          source={
            toggle
              ? require("../../assets/icons/logo-dio.png")
              : require("../../assets/icons/logo-dio-white.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  containerLight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  lightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "white",
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 250,
    height: 250,
  },
});
export default App;
