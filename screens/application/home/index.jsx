import { EstudaiHeader } from "@/components/application/headers/EstudaiHeader";
import { SubjectGroup } from "@/components/application/SubjectGroup";
import { StreakBadge } from "@/components/application/StreakBadge";
import { CoinsBadge } from "@/components/application/CoinsBadge";
import { VStack } from '@/components/ui/vstack';
import { View } from "react-native";

export const Home = () => {

  return (
    <View className="bg-estudaiBg flex-1">
      <EstudaiHeader />
      <VStack space={"md"} className="flex-1 p-5 items-center">
        <SubjectGroup size={"xl"} />

        <StreakBadge/>
        
        <CoinsBadge/>
      </VStack>
    </View>
  );
};
