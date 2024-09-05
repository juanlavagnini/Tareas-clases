import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="perfil" options={{ title: "Perfil" }} />
      <Stack.Screen name="updatePerfil" options={{ title: "Actualizar Perfil" }} />
    </Stack>
  );
}
