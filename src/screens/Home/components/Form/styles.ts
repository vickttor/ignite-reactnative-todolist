import { StyleSheet } from "react-native";
import { defaultTheme } from "../../../../themes/default";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    position:'relative',
    top: -26,
    gap: 4,
  },

  todoInput: {
    backgroundColor: defaultTheme.gray500,
    padding: 16,
    height: 54,
    borderRadius: 6,
    flex: 1,

    fontSize: 16,
    color: defaultTheme.gray100,
    borderWidth: 1,
    borderColor: defaultTheme.gray700
  },

  todoButton: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: defaultTheme.blueDark,
    alignItems:'center',
    justifyContent:'center',
  }

});