import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

export const SubjectItem = ({ title, color, href, size = 40 }) => {

	const router = useRouter();

	return (
		<TouchableOpacity 
			className={`bg-${color}-400 size-${size} justify-center items-center rounded-lg`}
			activeOpacity={0.7}
			onPress={() => {
				console.log("navegando para " + href);
				router.push({ pathname: "/questions/[subject]", params: { subject: href } });
			}}
		>
			<Text className="font-bold text-4xl">{title}</Text>
		</TouchableOpacity>
	);
}