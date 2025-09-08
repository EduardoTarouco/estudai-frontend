import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Text } from 'react-native';

export default function AppLayout() {
    
  const tabTriggerStyles = "bg-white justify-center items-center rounded-full size-18";

  return (
    <Tabs>
      <TabSlot />
      <TabList className="bg-black justify-evenly items-center rounded-t-3xl p-8">
        <TabTrigger name="home" href="/home" className={`${tabTriggerStyles}`}>
          <Text>Home</Text>
        </TabTrigger>

        <TabTrigger name="config" href="/config" className="bg-white justify-center items-center rounded-full size-18">
          <Text>Login</Text>
        </TabTrigger>

        <TabTrigger name="profile" href="/profile" className="bg-white justify-center items-center rounded-full size-18">
          <Text>Sign up</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
