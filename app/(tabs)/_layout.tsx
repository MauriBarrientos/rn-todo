import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerTitle: 'Bienvenido' }} />
      <Stack.Screen name="tasklist" options={{ headerTitle: 'Lista de tareas' }} />
      <Stack.Screen name="addtask" options={{ headerTitle: 'Agregar tarea' }} />
      <Stack.Screen name="edittask" options={{ headerTitle: 'Editar tarea' }} />
      <Stack.Screen name="viewtask" options={{ headerTitle: 'Ver tarea' }} />
      <Stack.Screen name="settings" options={{ headerTitle: 'Configuraciones' }} />
    </Stack>
  );
}
