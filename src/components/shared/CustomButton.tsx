import React from 'react';
import { View, Text, Pressable, PressableProps, StyleSheet } from 'react-native';
import { colors, buttonStyles, getButtonStyle } from '@/constants/styles';

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text-only';
}

const textColorMap = {
    primary: { color: colors.primary },
    secondary: { color: colors.secondary },
    tertiary: { color: colors.tertiary },
};

const CustomButton = React.forwardRef(
    (
        {
            children,
            color = 'primary',
            onPress,
            onLongPress,
            variant = 'contained',
        }: Props,
        ref: React.Ref<View>
    ) => {
        if (variant === 'text-only') {
            return (
                <Pressable
                    style={[buttonStyles.base, { backgroundColor: 'transparent' }]}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    ref={ref}
                >
                    <Text style={[buttonStyles.text, textColorMap[color], { fontWeight: '500' }]}>
                        {children}
                    </Text>
                </Pressable>
            );
        }

        return (
            <Pressable
                style={getButtonStyle(color)}
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
            >
                <Text style={buttonStyles.text}>
                    {children}
                </Text>
            </Pressable>
        );
    }
);

export default CustomButton;