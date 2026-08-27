import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
    },
})

const SettingsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Ajustes</Text>
                <Link href="/(stack)/home" asChild>
                    <CustomButton color="tertiary">
                        ← Volver al Home
                    </CustomButton>
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default SettingsScreen