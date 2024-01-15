import { useNavigation } from '@react-navigation/native';

export function initFunc() {
  const navigation = useNavigation<any>();
  return { navigation };
}
