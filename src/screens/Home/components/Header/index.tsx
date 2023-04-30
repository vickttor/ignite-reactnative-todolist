import { View } from "react-native";
import { Image } from 'expo-image';
import { styles } from "./styles";

export function HomeHeader() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../../assets/logo.svg")} 
        style={styles.logoImage}
      />
    </View>
  );
}