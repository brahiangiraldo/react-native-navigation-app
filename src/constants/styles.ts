import { StyleSheet } from 'react-native';

// Colores globales
export const colors = {
  primary: '#49129C',
  secondary: '#B40086',
  tertiary: '#ef2967',
  white: '#FFFFFF',
  text: '#000000',
};

// Estilos reutilizables
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
});

// Estilos de botones
export const buttonStyles = StyleSheet.create({
  base: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

// Helper para obtener el estilo del botón por color
export const getButtonStyle = (color: 'primary' | 'secondary' | 'tertiary') => ({
  ...buttonStyles.base,
  backgroundColor: colors[color],
});
