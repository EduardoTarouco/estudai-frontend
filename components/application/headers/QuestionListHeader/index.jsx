import { SubjectItem } from '@/components/application/SubjectItem';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';

export const QuestionListHeader = ({ title, color = "default" }) => {

  return (
    <HStack space="lg" className="bg-black w-full justify-between items-center p-4 px-6">
      <SubjectItem color={color} size={"md"} title={title} />
      <Heading size="3xl" className="color-white">ESTUDAÍ</Heading>
    </HStack>
  );
}