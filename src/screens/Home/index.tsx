import { useState } from "react";
import { View , Alert, FlatList } from "react-native";
import { styles } from "./styles";
import { HomeHeader } from "./components/Header";
import { TodoForm } from "./components/Form";
import { TodoListDetails } from "./components/TodoListDetails";
import { TodoListType, TodoType } from "../../models/todo/create.model";
import { TodoCard } from "./components/TodoCard";
import { EmptyListComponent } from "./components/EmptyListComponent";

import Toast from 'react-native-toast-message';

export function HomeScreen() {

  const [todoList, setTodoList] = useState<TodoListType>([]);

  function handleCreateNewTodo(todoToCreate: TodoType, onSuccess: () => void) {

    if(todoList.some(todo=>todo.name.toUpperCase() === todoToCreate.name.toUpperCase())){
      return Toast.show({
        type: 'error',
        text1: 'Tarefa existente!',
        text2: `Já existe uma tarefa com o nome ${todoToCreate.name}`
      });
    }

    setTodoList(prevState=>[...prevState, todoToCreate]);

    onSuccess();
  }

  function handleToggleTodo(todoToToggle: TodoType, checked: boolean) {
    setTodoList(prevState=>prevState.map((todo)=> {
      if(todo.id === todoToToggle.id) todo.completed = checked;
      return todo;
    }));
  }

  function handleDeleteTodo(todoToDelete: TodoType) {
    Alert.alert(
      "Deletar Tarefa", 
      `Tem certeza que deseja deletar a tarefa "${todoToDelete.name}"?`,
      [
        {
          text: "Sim",
          onPress:()=>{
            setTodoList(prevState=>
            prevState.filter(todo=>todo.id !== todoToDelete.id))

            Toast.show({
              type: 'success',
              text1: 'Tarefa removida com sucesso!',
              text2: `Tarefa "${todoToDelete.name}" não está mais na sua lista.`
            });
          }
        },
        {
          text: "Não",
          style:'cancel'
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <HomeHeader/>
      <View style={styles.content}>
        <TodoForm onCreate={handleCreateNewTodo}/>
        <TodoListDetails list={todoList}/>

        <FlatList 
          data={todoList}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=> {
            return (
              <TodoCard
                todo={item}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            )
          }}
          ListEmptyComponent={()=> {
            return <EmptyListComponent />
          }}
        />
      </View>
    </View>
  )
}