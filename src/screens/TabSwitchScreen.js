import * as React from 'react'
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Home from './Home'
import DetailScore from './DetailScore'

const FirstRoute = () => <Home />

const SecondRoute = () => <DetailScore />

const initialLayout = { width: Dimensions.get('window').width }

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
})

function TabSwitchScreen() {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ])

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
                backgroundColor: '#000',
                elevation: 0,
            }}
        />
    )
}

export default TabSwitchScreen
