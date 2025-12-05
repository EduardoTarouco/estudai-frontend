import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Icon, CloseIcon } from "@/components/ui/icon";
import { Gem } from "lucide-react-native";

/**
 * Modal de confirmação de resgate de recompensa
 * @param {boolean} isOpen - Se o modal está aberto
 * @param {function} onClose - Função chamada ao fechar o modal
 * @param {object} reward - Recompensa a ser resgatada
 * @param {function} onConfirm - Função chamada ao confirmar o resgate
 * @param {boolean} isLoading - Se está carregando
 */
export const RedeemModal = ({
  isOpen,
  onClose,
  reward,
  onConfirm,
  isLoading = false,
}) => {
  if (!reward) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Confirmar Resgate</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <VStack space="md" className="items-center">
            <Text className="text-xl font-bold text-center">
              {reward.title}
            </Text>
            <Text className="text-sm text-center text-gray-600">
              {reward.description}
            </Text>
            <HStack space="xs" className="items-center mt-4">
              <Gem size={24} color="#3b82f6" />
              <Text className="text-2xl font-bold text-blue-600">
                {reward.cost}
              </Text>
            </HStack>
            <Text className="text-sm text-center text-gray-500 mt-2">
              Esta ação não pode ser desfeita
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <HStack space="sm" className="w-full">
            <Button
              variant="outline"
              action="secondary"
              onPress={onClose}
              className="flex-1"
              isDisabled={isLoading}
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button
              variant="solid"
              action="primary"
              onPress={onConfirm}
              className="flex-1"
              isDisabled={isLoading}
            >
              <ButtonText>{isLoading ? "Processando..." : "Confirmar"}</ButtonText>
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

