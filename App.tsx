
import React, { useState } from 'react';

import {


  FlatList,
  StyleSheet,

  Text,

  View,
} from 'react-native';
import colors from './app/values/colors';
import FloatingButton from './app/components/FloatingButton';
import AddTaskModal from './app/components/AddTaskModal';
import TaskCard from './app/components/TaskCard';




const App = () => {

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const [todoList, setTodoList] = useState<any>([])

  const handleModalVisible = () => {

    console.log('usledi');

    setModalVisible(!modalVisible)
  }

  const addTask = (taskContent: string) => {


    const taskContentCheck = taskContent?.trim().toLowerCase();

    const checkDublicate = todoList?.find((todo: any) => todo?.task?.trim().toLowerCase() === taskContentCheck)

    const newTask = {
      id: todoList.length + 1,
      task: taskContent,
      isCompleted: false
    }

    setTodoList([...todoList, newTask])
    setModalVisible(false)



  }

  const renderTodoList = ({ item }: any) => <TaskCard isCompleted={item.isCompleted} item={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <FloatingButton onPress={handleModalVisible} />
      <AddTaskModal onAddTask={addTask} onClose={handleModalVisible} isVisible={modalVisible} />

      <FlatList

        data={todoList}
        renderItem={renderTodoList}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textBlack
  },
  title: {
    color: colors.white,
    fontSize: 18
  }
});

export default App;
