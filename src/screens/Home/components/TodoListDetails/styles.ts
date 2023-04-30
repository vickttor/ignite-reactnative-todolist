import { StyleSheet } from "react-native";
import { defaultTheme } from "../../../../themes/default";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:16,
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap: 8,
  },
  createdLabel: {
    fontWeight:'bold',
    fontSize: 14,
    color: defaultTheme.blue,
    textTransform:'capitalize',
  },
  completedLabel: {
    fontWeight:'bold',
    fontSize: 14,
    color: defaultTheme.purple,
    textTransform:'capitalize',
  },
  badge: {
    borderRadius: 999,
    backgroundColor: defaultTheme.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: defaultTheme.gray200,
    fontSize: 12,
    fontWeight:'bold',
  }
})