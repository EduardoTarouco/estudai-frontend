import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { House, UserRound, Handbag } from "lucide-react-native";
import { TabIcon } from "@/components/application/TabIcon";
import { useState } from "react";

// Define as configurações das abas de navegação que serão renderizadas pelo TabList abaixo
const tabConfig = [
  { name: "homeTab",         href: "/home",         Icon: House },
  { name: "profileTab",      href: "/profile",      Icon: UserRound },
  { name: "shopTab",         href: "/shop",         Icon: Handbag },
]

export default function AppLayout() {

  // Define qual aba está selecionada atualmente, utilizada para alterar o estilo do ícone
  const [selectedTab, setSelectedTab] = useState("homeTab");

  return (
    <Tabs className="bg-estudaiBg">
      <TabSlot />
      <TabList 
        className="
          bg-black
          flex-row
          items-center
          overflow-hidden
          rounded-t-[36]
          px-1 pt-3
        ">
        {tabConfig.map(({ name, href, Icon }, index) => (
          <TabTrigger
            key={name}
            name={name}
            href={href}
            onPress={() => setSelectedTab(name)}
            className={`
              flex-1 
              flex-row 
              justify-center items-center 
              ${selectedTab === name ? "bg-white" : "bg-gray-300"} 
              ${index === 0 ? "rounded-tl-[36]" : "border-l border-black"} 
              ${index === tabConfig.length - 1 ? "rounded-tr-[36]" : "border-r border-black"}
            `}
          >
            <TabIcon Icon={Icon} selected={selectedTab === name} />
          </TabTrigger>
        ))}
      </TabList>
    </Tabs>
  );
}
