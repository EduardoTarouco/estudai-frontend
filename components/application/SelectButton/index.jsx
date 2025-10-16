import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from '@/components/ui/select';
import { ChevronDown } from "lucide-react-native";

export const SelectButton = ({ placeholder, disabled=false, IconComponent=ChevronDown }) => {

  return (
    <Select className="w-full">
      <SelectTrigger>
        <SelectInput placeholder={placeholder} className="flex-1" />
        <SelectIcon className="mr-3" as={IconComponent} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="Red" value="red" />
          <SelectItem label="Blue" value="blue" />
          <SelectItem label="Black" value="black" />
          <SelectItem label="Pink" value="pink" isDisabled={true} />
          <SelectItem label="Green" value="green" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}