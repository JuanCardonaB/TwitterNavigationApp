import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../types/ProfileTypes';

// Define el tipo de las props que recibe tu componente
interface OptionProps {
  title: string;
  navigateTo?: keyof RootStackParamList; // Restringe navigateTo a las rutas específicas
  borderTop?: boolean;
  borderBottom?: boolean;
}

export const Option = ({
  title,
  navigateTo,
  borderTop = false,
  borderBottom = false,
}: OptionProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo); // Ahora navigation.navigate acepta solo valores específicos
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.option,
        {
          backgroundColor: '#555',
          borderBottomLeftRadius: borderBottom ? 10 : 0,
          borderBottomRightRadius: borderBottom ? 10 : 0,
          borderTopLeftRadius: borderTop ? 10 : 0,
          borderTopRightRadius: borderTop ? 10 : 0,
        },
      ]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
