import { View } from 'react-native';

export const TabIcon = ({ Icon, selected }) => {

  return (
    <View 
      className={`
        flex-col
        flex-1 justify-center items-center
        p-2
      `}>
      <Icon size={36} color={selected ? "lime" : "black"} />
    </View>
  );
}