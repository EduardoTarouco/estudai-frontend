import { SubjectItem } from '@/components/application/SubjectItem';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';

/**
 * Componente que representa um grupo de matérias (subjects) na tela inicial.
 * Utiliza o componente SubjectItem para renderizar cada matéria.
 * @param {string} size - Tamanho dos itens (opções: "sm", "md", "lg", "xl").
 */
export const SubjectGroup = ({ size }) => {
	const subjectsObject = [
		{ title: "LING", color: "blue",   href: "linguagens" },
		{ title: "HUM",  color: "green",  href: "humanas" },
		{ title: "NAT",  color: "purple", href: "naturezas" },
		{ title: "MAT",  color: "red",    href: "matematica" }
	]

	const firstRow = subjectsObject.slice(0, subjectsObject.length/2);
	const secondRow = subjectsObject.slice(subjectsObject.length/2, subjectsObject.length);

	return (
		<VStack space={"md"} className="bg-gray-600 p-4 rounded-lg">
			<HStack space={"md"}>
				{firstRow.map(({ title, color, href }) => (
					<SubjectItem 
						key={href} 
						title={title} 
						color={color} 
						href={href} 
						size={size}
					/>
				))}
			</HStack>
			<HStack space={"md"}>
				{secondRow.map(({ title, color, href }) => (
					<SubjectItem 
						key={href} 
						title={title} 
						color={color} 
						href={href} 
						size={size}
					/>
				))}
			</HStack>
		</VStack>
	);
}