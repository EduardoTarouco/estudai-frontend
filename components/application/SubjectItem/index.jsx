import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

/**
 * Componente que representa um item de matéria (subject) na tela inicial.
 * @param {string} title - Título da matéria a ser exibido.
 * @param {string} href - Identificador da matéria para navegação.
 * @param {string} color - Cor de fundo do item (opções: "default", "blue", "green", "purple", "red").
 * @param {string} size - Tamanho do item (opções: "sm", "md", "lg", "xl").
 */
export const SubjectItem = ({ title, href, color = "default", size = "lg" }) => {

	const router = useRouter();

	const variantStyles = {
		color: {
			default: "bg-gray-500",
			blue: "bg-blue-400",
			green:	"bg-green-400",
			purple:	"bg-purple-400",
			red: "bg-red-400"
		},
		size: {
			sm: "w-10 h-10",
			md: "w-20 h-20",
			lg: "w-32 h-32",
			xl: "w-40 h-40",
			textSm: "font-semibold text-2xl",
			textLg: "font-bold text-4xl"
		}
	};

	return (
		<TouchableOpacity
			className={`${variantStyles.color[color]} ${variantStyles.size[size]} justify-center items-center rounded-lg`}
			activeOpacity={0.7}
			onPress={() => {
				console.log("navegando para " + href);
				router.push(`/questions/${href}`); // Futuramente, passar de parâmetro o href da matéria, que é seu identificador e também passar a cor atual, para manter a consistência visual em telas posteriores
			}}
		>
			{/* Componentes de moedas e streak serão adicionado aqui no futuro, ao invés do Text */}
			<Text className={`${size === "lg" || size === "xl" ? variantStyles.size.textLg : variantStyles.size.textSm}`}>{title}</Text>
		</TouchableOpacity>
	);
}