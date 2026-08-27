import { Text, View, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { products } from '@/store/products.store'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 16,
    },
    card: {
        marginTop: 16,
        padding: 16,
        backgroundColor: '#f3f4f6',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#49129C',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardDescription: {
        color: '#4b5563',
        marginTop: 8,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    price: {
        fontWeight: 'bold',
        color: '#49129C',
    },
    bottomButton: {
        marginBottom: 16,
    },
})

const ProductsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Productos</Text>

                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardDescription}>{item.description}</Text>
                            <View style={styles.cardFooter}>
                                <Text style={styles.price}>${item.price}</Text>
                                <Link href={`/tabs/(stack)/products/${item.id}`} asChild>
                                    <CustomButton variant="text-only" color='primary'>
                                        Ver detalles
                                    </CustomButton>
                                </Link>
                            </View>
                        </View>
                    )}
                    scrollEnabled={true}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />

                <View style={styles.bottomButton}>
                    <Link href="/tabs/(stack)/home" asChild>
                        <CustomButton color="primary">
                            ← Volver al Home
                        </CustomButton>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductsScreen