import { View, Text } from "react-native";
import { styles } from "./styles";
import { TodoListType } from "../../../../models/todo/create.model";

interface TodoListDetailsProps {
  list: TodoListType
}

export function TodoListDetails({list}: TodoListDetailsProps) {

  const completeds = list.filter(todo=>todo.completed).length;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.createdLabel}>Criadas</Text>
        <Text style={styles.badge}>{list.length}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.completedLabel}>Concluídas</Text>
        <Text style={styles.badge}>{completeds}</Text>
      </View>
    </View>
  );
}


