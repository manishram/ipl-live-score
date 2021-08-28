import * as React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    RefreshControl,
    ScrollView,
    Text,
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { TabView } from 'react-native-tab-view'
import { TabBar } from 'react-native-tab-view'
import Info from '../screens/Info'

const initialLayout = { width: Dimensions.get('window').width }
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
}

function DetailMatchTopNav(props) {
    // const { itemId, otherParam } = route.params
    const matchData = props.route.params.matchData
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'info', title: 'Info' },
        { key: 'Live', title: 'Live' },
        { key: 'scorecard', title: 'Scorecard' },
        { key: 'highlights', title: 'Highlights' },
        { key: 'overs', title: 'Overs' },
    ])

    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => setRefreshing(false))
    }, [])

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'info':
                return (
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <Info matchDetail={matchData} />
                        </ScrollView>
                    </View>
                )

            default:
                return null
        }
    }
    return (
        <TabView
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    indicatorStyle={styles.indicator}
                    style={styles.tabbar}
                    labelStyle={styles.label}
                    tabStyle={styles.tabStyle}
                    scrollEnabled={true}
                />
            )}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
                backgroundColor: 'rgba(240, 240, 240, 1)',
                elevation: 0,
            }}
        />
    )
}
const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: '#0024A5',
    },
    indicator: {
        backgroundColor: '#DA010E',
        height: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    label: {
        fontWeight: '400',
    },
    tabStyle: {
        width: 'auto',
    },
})
export default DetailMatchTopNav
