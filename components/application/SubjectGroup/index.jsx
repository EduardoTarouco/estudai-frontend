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
		{ title: "LING", color: "blue",   href: "linguagens", icon: require("@/assets/images/subjectIcons/linguagens.png") },
		{ title: "HUM",  color: "green",  href: "humanas",    icon: require("@/assets/images/subjectIcons/humanas.png") },
		{ title: "NAT",  color: "purple", href: "naturezas",  icon: require("@/assets/images/subjectIcons/naturezas.png") },
		{ title: "MAT",  color: "red",    href: "matematica", icon: require("@/assets/images/subjectIcons/matematica.png") }
	]

	const firstRow = subjectsObject.slice(0, subjectsObject.length/2);
	const secondRow = subjectsObject.slice(subjectsObject.length/2, subjectsObject.length);

	return (
		<VStack space={"md"} className="bg-gray-950 p-4 rounded-lg">
			<HStack space={"md"}>
				{firstRow.map(({ title, color, href, icon }) => (
					<SubjectItem 
						key={href} 
						title={title} 
						color={color} 
						href={href} 
						size={size}
						icon={icon}
					/>
				))}
			</HStack>
			<HStack space={"md"}>
				{secondRow.map(({ title, color, href, icon }) => (
					<SubjectItem 
						key={href} 
						title={title} 
						color={color} 
						href={href} 
						size={size}
						icon={icon}
					/>
				))}
			</HStack>
		</VStack>
	);
}