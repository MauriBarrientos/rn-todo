import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function EditTaskScreen() {
  const [task, setTask] = useState(''); // You would want to initialize this state with the current task value

  const handleEditTask = () => {
    // Here you can add your logic to edit the task
    console.log('Task edited:', task);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setTask}
        value={task}
        placeholder="Edit Task"
      />
      <Button title="Edit Task" onPress={handleEditTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
  },
});