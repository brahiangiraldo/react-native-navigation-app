import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useNavigation } from 'expo-router'
import type { DrawerNavigationProp } from 'expo-router/drawer'
import CustomButton from '@/components/shared/CustomButton'

type DrawerParamList = Record<string, undefined>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 24,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
})



const HomeScreen = () => {


    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>()


    const onOpenDrawer = () => {
        navigation.openDrawer()
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Navegación</Text>

                <Link href="/products" asChild>
                    <CustomButton color="primary">
                        Productos
                    </CustomButton>
                </Link>

                <Link href="/profile" asChild>
                    <CustomButton color="secondary">
                        Profile
                    </CustomButton>
                </Link>

                <Link href="/settings" asChild>
                    <CustomButton color="tertiary">
                        Ajustes
                    </CustomButton>
                </Link>

                <CustomButton onPress={onOpenDrawer}>
                    Abrir menú
                </CustomButton>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
