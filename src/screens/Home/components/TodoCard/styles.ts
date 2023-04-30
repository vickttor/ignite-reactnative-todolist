import { StyleSheet } from "react-native";
import { defaultTheme } from "../../../../themes/default";

export const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:8,
    padding: 12,
    
    backgroundColor: defaultTheme.gray500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: defaultTheme.gray400,
    marginBottom: 8
  },
  deleteTodoButton: {
    width: 32, 
    height: 32, 
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  deleteTodoButtonActive: {
    backgroundColor: defaultTheme.gray400,
    color: defaultTheme.danger,
  }
});