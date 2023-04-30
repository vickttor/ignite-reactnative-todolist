import React, { useState } from "react";

import { View, TextInput, TouchableOpacity } from "react-native";
import { PlusCircle } from "phosphor-react-native";
import { styles } from "./styles";
import { defaultTheme } from "../../../../themes/default";
import { TodoType, todoSchema } from "../../../../models/todo/create.model";
import { v4 as uuidv4 } from "uuid";

import * as zod from "zod";

import Toast from "react-native-toast-message";

interface TodoFormProps {
  onCreate: (
    todo: TodoType, 
    onSuccess: () => void
  ) => void;
}

export function TodoForm({onCreate}: TodoFormProps) {

  const [todoName, setTodoName] = useState("");

  function handleCreateNewTodo() {
    try {
      const newTodo: TodoType = {
        id: uuidv4(),
        name: todoName.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
  
      todoSchema.parse(newTodo);
      onCreate(newTodo, () => setTodoName(""));
      
    }catch(error: any) {
      if(error instanceof zod.ZodError) {
        Toast.show({
          type: 'error',
          text1: 'Erro no preenchimento',
          text2: error.issues[0].message
        });
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={todoName}
        onChangeText={setTodoName}
        cursorColor={defaultTheme.blue}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={defaultTheme.gray300}
        style={styles.todoInput}
      />
      <TouchableOpacity
        onPress={handleCreateNewTodo}
        style={styles.todoButton}
      >
        <PlusCircle 
          size={16} 
          color={defaultTheme.gray100} 
          weight="regular"
        />
      </TouchableOpacity>
    </View>
  )
}