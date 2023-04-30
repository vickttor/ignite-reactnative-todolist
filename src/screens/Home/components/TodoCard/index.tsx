import { TouchableOpacity } from "react-native";
import { Trash } from "phosphor-react-native";
import { styles } from "./styles";
import { TodoType } from "../../../../models/todo/create.model";
import { defaultTheme } from "../../../../themes/default";

import Animated, {BounceInDown, BounceOutRight} from "react-native-reanimated";

import BouncyCheckbox from "react-native-bouncy-checkbox";

interface TodoCardProps {
  todo: TodoType;
  onToggle: (todo: TodoType, checked: boolean) => void;
  onDelete: (todo: TodoType) => void;
}

export function TodoCard({todo, onToggle, onDelete}: TodoCardProps) {

  return(
    <Animated.View 
      entering={BounceInDown}
      exiting={BounceOutRight}
      style={styles.container}
    >
      <BouncyCheckbox
        text={todo.name}
        size={18}
        fillColor={
          todo.completed 
            ? defaultTheme.purpleDark 
            : defaultTheme.blue
        }
        unfillColor="transparent"
        textStyle={{
          color: todo.completed 
            ? defaultTheme.gray300 
            : defaultTheme.gray100,
        }}
        iconStyle={{ borderColor: defaultTheme.blue}}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(checked)=>onToggle(todo, checked)}
      />

      <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={(event)=>onDelete(todo)}
        style={styles.deleteTodoButton}
      >
        <Trash size={18} color={defaultTheme.gray300} weight="regular" />
      </TouchableOpacity>
    </Animated.View>
  );
}