import { View } from 'react-native';

export const TabIcon = ({ Icon, selected }) => {

  return (
    <View className={`${selected ? "bg-white" : "bg-gray-200"} justify-center items-center rounded-full size-16`}>
      <Icon size={selected ? 42 : 36} color={selected ? "lime" : "black"} />
    </View>
  );
}