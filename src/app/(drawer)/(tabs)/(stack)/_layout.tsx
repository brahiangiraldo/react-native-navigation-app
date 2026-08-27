import { router, Stack, useNavigation } from 'expo-router'
import type { DrawerNavigationProp } from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'

type DrawerParamList = Record<string, undefined>
const StackLayout = () => {

    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>('/(drawer)')

    const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
        if (canGoBack) {
            router.back()
            return
        }

        navigation.toggleDrawer()
    }

    return (
        <Stack screenOptions={{
            // headerShown: false,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white',
            },
            headerLeft: ({ tintColor, canGoBack }) => (
                <Ionicons
                    name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                    size={28}
                    color={tintColor}
                    onPress={() => onHeaderLeftClick(canGoBack)}
                />
            )
        }}

        //  navigationBarColor: '#05192e


        >
            <Stack.Screen
                name="home/index"
                options={{
                    title: 'Home'
                }} />
            <Stack.Screen
                name="products/index"
                options={{
                    title: 'Productos',
                }} />
            <Stack.Screen
                name="profile/index"
                options={{
                    title: 'Perfil '
                }} />
            <Stack.Screen
                name="settings/index"
                options={{
                    title: 'Ajustes'
                }} />

        </Stack>


    )
}

export default StackLayout