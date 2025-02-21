import { registerRootComponent } from 'expo';
import { Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';

function AppLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="(tabs)/home" options={{ title: "Inicio" }} />
        <Stack.Screen name="(tabs)/add-task" options={{ title: "Añadir Tarea" }} />
      </Stack>
    </AuthProvider>
  );
}

export default registerRootComponent(AppLayout);

