import { House, Settings, UserRound, Handbag } from "lucide-react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { TabIcon } from "@/components/application/TabIcon";
import { useState } from "react";

// Define as configurações das abas de navegação que serão renderizadas pelo TabList abaixo
const tabConfig = [
  { name: "homeTab",         href: "/home",         Icon: House },
  { name: "profileTab",      href: "/profile",      Icon: UserRound },
  { name: "shopTab",         href: "/shop",         Icon: Handbag },
  { name: "configTab",       href: "/config",       Icon: Settings }
]

export default function AppLayout() {

  // Define qual aba está selecionada atualmente, utilizada para alterar o estilo do ícone
  const [selectedTab, setSelectedTab] = useState("homeTab");

  return (
    <Tabs>
      <TabSlot />
      <TabList className="bg-black justify-around items-center rounded-t-[36] p-4">
        {tabConfig.map(({ name, href, Icon }) => (
          <TabTrigger
            key={name}
            name={name}
            href={href}
            onPress={() => setSelectedTab(name)}
          >
            <TabIcon Icon={Icon} selected={selectedTab === name} />
          </TabTrigger>
        ))}
      </TabList>
    </Tabs>
  );
}
