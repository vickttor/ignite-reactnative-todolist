import { StyleSheet } from "react-native";
import { defaultTheme } from "../../../../themes/default";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 173,
    backgroundColor: defaultTheme.gray700,
    alignItems:'center',
    justifyContent:'center'
  },
  logoImage: {
    width: 113, 
    height: 32,
  }
});