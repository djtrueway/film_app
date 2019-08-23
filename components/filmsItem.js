import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'


export default class FilmItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const film = this.props.film
        return (
            <View style={styles.container}>
                <View style={styles.image}><Text>Image</Text></View>
                <View style={styles.content}>
                    <View style={styles.hearder}>
                        <View style={styles.title}><Text> {film.title}</Text></View>
                        <View style={styles.vote}><Text> {film.vote_average}</Text></View>
                    </View>
                    <View style={styles.description}><Text style={styles.description_text} numberOfLines={3}> {film.overview}</Text></View>
                    <View><Text>Sorti le  {film.release_date}</Text></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        marginTop: 5,
        flexDirection: 'row',
        marginBottom: 3
        
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    hearder: {
        flexDirection: 'row',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },

    description: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        flexWrap: 'wrap',
    },
    content: {
        flexDirection: 'column',
    }
});

