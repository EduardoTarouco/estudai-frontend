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
    <Select>
      <SelectTrigger variant="outline" size="md" >
        <SelectInput placeholder={placeholder} className="text-md" />
        <SelectIcon className="mr-3" as={IconComponent} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="2019" value="2019" />
          <SelectItem label="2020" value="2020" />
          <SelectItem label="2021" value="2021" />
          <SelectItem label="2022" value="2022" isDisabled={true} />
          <SelectItem label="2023" value="2023" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}