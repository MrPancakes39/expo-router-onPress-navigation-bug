import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack, useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function Layout() {
  const router = useRouter();

  const options = {
    headerTitleAlign: 'center',
    headerLeft: () => {
      if (!router.canGoBack()) {
        return null;
      }
      return (
        <Pressable
          onPressIn={() => {
            console.log('press in');
          }}
          onPressOut={() => {
            console.log('press out');
          }}
          onPress={() => {
            console.log('press');
            router.back();
          }}>
          <Text>go back button</Text>
        </Pressable>
      );
    },
  } as const satisfies NativeStackNavigationOptions;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          ...options,
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="demo"
        options={{
          ...options,
          title: 'demo',
        }}
      />
    </Stack>
  );
}
