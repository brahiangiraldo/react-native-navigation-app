import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

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
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Navegación</Text>

                <Link href="/tabs/(stack)/products" asChild>
                    <CustomButton color="primary">
                        Productos
                    </CustomButton>
                </Link>

                <Link href="/tabs/profile" asChild>
                    <CustomButton color="secondary">
                        Profile
                    </CustomButton>
                </Link>

                <Link href="/tabs/settings" asChild>
                    <CustomButton color="tertiary">
                        Ajustes
                    </CustomButton>
                </Link>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
