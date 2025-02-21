import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TaskCard from "../../components/ui/TaskCard";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Estudiar React Native", description: "Repasar hooks y navegación" },
    { id: "2", title: "Hacer ejercicio", description: "30 min de cardio" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard title={item.title} description={item.description} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
