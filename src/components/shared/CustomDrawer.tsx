import { View, Text } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    type DrawerContentComponentProps,
} from 'expo-router/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
                <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
                    <Text className="text-3xl font-bold text-primary font-work-black">BMG</Text>
                </View>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer