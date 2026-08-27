import { useEffect } from 'react'
import { router } from 'expo-router'

const App = () => {
    useEffect(() => {
        // router.replace('/(stack)/home')
        // router.replace('./tabs')
        router.replace('./drawer')
    }, [])

    return null
}

export default App 