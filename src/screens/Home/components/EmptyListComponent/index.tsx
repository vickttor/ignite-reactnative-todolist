import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";
import { defaultTheme } from "../../../../themes/default";

export function EmptyListComponent() {
  return(
    <View style={styles.container}>
      <Image 
        source={require("../../../../assets/Clipboard.svg")} 
        style={{width: 56, height: 56, marginBottom: 16}}
      />
      <Text style={{...styles.message, fontWeight:'bold'}}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.message}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: defaultTheme.gray400,
  },
  message: {
    fontSize: 14,
    color: defaultTheme.gray300,
  }
})