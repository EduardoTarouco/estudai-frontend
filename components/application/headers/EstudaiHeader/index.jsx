import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';

export const EstudaiHeader = () => {

  return (
    <HStack space="lg" className="bg-black w-full justify-center items-center p-4 px-6">
      <Heading size="3xl" className="color-white">ESTUDAÍ</Heading>
    </HStack>
  );
}