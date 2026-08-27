import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useLocalSearchParams } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { products } from '@/store/products.store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  priceBox: {
    backgroundColor: '#49129C',
    padding: 24,
    borderRadius: 8,
    marginBottom: 24,
  },
  priceText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
    marginBottom: 32,
  },
  idBox: {
    backgroundColor: '#f3f4f6',
    padding: 20,
    borderRadius: 8,
    marginBottom: 32,
  },
  idLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  idValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#49129C',
    marginTop: 8,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 32,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})

const ProductScreen = () => {
  const { id } = useLocalSearchParams()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>Producto no encontrado</Text>
        <Link href="/products" asChild>
          <CustomButton color="primary">
            Volver a Productos
          </CustomButton>
        </Link>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{product.title}</Text>

          <View style={styles.priceBox}>
            <Text style={styles.priceText}>
              ${product.price.toFixed(2)}
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.description}>
            {product.description}
          </Text>

          <View style={styles.idBox}>
            <Text style={styles.idLabel}>ID del Producto</Text>
            <Text style={styles.idValue}>{product.id}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton color="primary">
              Agregar al Carrito
            </CustomButton>
            <CustomButton color="secondary">
              Agregar a Favoritos
            </CustomButton>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Link href="/products" asChild>
          <CustomButton color="tertiary">
            ← Volver a Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default ProductScreen