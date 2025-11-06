import { Picker } from "@react-native-picker/picker";
import { VStack } from "@/components/ui/vstack";
import { View, Text, StyleSheet} from "react-native";

export const SelectButton = ({ setSelected, selectedValue, title="Escolha", items=["Sem itens"], enabled=true, isInvalid=false }) => {

  return (
    <VStack space="sm" style={styles.container}>
      <Text style={[styles.label, isInvalid && styles.labelError]}>
        {title}:
      </Text>

      <View
        style={[
          styles.pickerContainer,
          isInvalid && styles.pickerContainerError,
        ]}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
            setSelected(itemValue)
          }
          enabled={enabled}
          style={styles.picker}
          dropdownIconColor="#555"
        >
          {
            items.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))
          }
        </Picker>
      </View>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 250
  },
  label: {
    fontSize: 14,
    color: "#888",
    fontWeight: "400",
    marginBottom: 4,
  },
  labelError: {
    color: "#dc2626",
  },
  pickerContainer: {
    minWidth: 250,
    height: 40,
    paddingLeft: 5,
    borderRadius: 25,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    overflow: "hidden",
  },
  pickerContainerError: {
    borderWidth: 2,
    borderColor: "#ef4444",
  },
  picker: {
    color: "#111827",
    textAlign: "center",
    height: 50,
    width: "100%",
  },
});
