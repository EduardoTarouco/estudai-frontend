import { SubjectItem } from '@/components/application/SubjectItem';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';

export const SubjectGroup = () => {

	const subjectsObject = [
		{ title: "LING", color: "blue",   href: "linguagens" },
		{ title: "HUM",  color: "green",  href: "humanas" },
		{ title: "NAT",  color: "purple", href: "naturezas" },
		{ title: "MAT",  color: "red",    href: "matematica" }
	]

	const firstRow = subjectsObject.slice(0, subjectsObject.length/2);
	const secondRow = subjectsObject.slice(subjectsObject.length/2, subjectsObject.length);

	return (
		<VStack space={"md"}>
			<HStack space={"md"}>
				{firstRow.map(({ title, color, href }) => (
					<SubjectItem 
						key={href} 
						title={title} 
						color={color} 
						href={href}
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
					/>
				))}
			</HStack>
		</VStack>
	);
}