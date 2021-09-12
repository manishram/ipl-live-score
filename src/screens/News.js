import React, { Component, useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    Dimensions,
    ActivityIndicator,
} from 'react-native'
import NewsCard from '../components/NewsCard'
import AppApi from '../api/AppApi'
import BannerAd from '../components/BannerAd'

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
}

const News = (props) => {
    const [featuredNews, setFeaturedNews] = useState([])
    const [isNewsLoading, setIsNewsLoading] = useState()
    const getFeaturedNews = async () => {
        setIsNewsLoading(true)
        try {
            const response = await AppApi.get('/news/', {
                params: {
                    featured: 'true',
                },
            })
            setFeaturedNews(response.data.response)
            setIsNewsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getFeaturedNews()
    }, [])

    const [notFeaturedNews, setNotFeatured] = useState([])
    const getNotFeaturedNews = async () => {
        try {
            const response = await AppApi.get('/news/', {
                params: {
                    featured: 'false',
                },
            })
            setNotFeatured(response.data.response)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getNotFeaturedNews()
    }, [])
    const [isFetching, setIsFetching] = useState(false)
    async function onRefresh() {
        setIsFetching(true)
        await getFeaturedNews()
        await getNotFeaturedNews()
        setIsFetching(false)
    }
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container, { height: windowHeight - 173 }]}>
                <ScrollView showsVerticalScrollIndicator={true}>
                    {isNewsLoading ? (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                padding: 10,
                                height: 400,
                            }}
                        >
                            <ActivityIndicator
                                size="large"
                                color="#0000ff"
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                }}
                            />
                        </View>
                    ) : (
                        <View>
                            <FlatList
                                initialNumToRender={2}
                                windowSize={1}
                                showsVerticalScrollIndicator={false}
                                onRefresh={() => onRefresh()}
                                refreshing={isFetching}
                                extraData={isFetching}
                                inverted={true}
                                data={featuredNews}
                                keyExtractor={(news) => news.id.toString()}
                                renderItem={(items) => {
                                    return <NewsCard newsData={items.item} />
                                }}
                            />
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                onRefresh={() => onRefresh()}
                                refreshing={isFetching}
                                extraData={isFetching}
                                inverted={true}
                                data={notFeaturedNews}
                                keyExtractor={(news) => news.id.toString()}
                                renderItem={(items) => {
                                    return <NewsCard newsData={items.item} />
                                }}
                            />
                        </View>
                    )}
                </ScrollView>
            </View>
            {props.ads ? <BannerAd style={styles.bannerAd} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
    bannerAd: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        marginBottom: 200,
    },
})

export default News
