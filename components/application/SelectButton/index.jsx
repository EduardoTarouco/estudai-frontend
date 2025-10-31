import { Picker } from '@react-native-picker/picker';
import { VStack } from '@/components/ui/vstack';
import { Text } from 'react-native';

export const SelectButton = ({ setSelected, selectedValue, title="Escolha", items=["Sem itens"], enabled=true }) => {

  return (
    <VStack space="sm">
      <Text className="text-xl font-bold">{title}:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelected(itemValue)
        }
        enabled={enabled}
        style={{ width: 200, height: 50, color: 'black', backgroundColor: 'lightgray', borderRadius: 32 }} 
      >
      {
        items.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))
      }
      </Picker>
    </VStack>
  );
}