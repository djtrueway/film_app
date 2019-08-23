import React from 'react'
import { StyleSheet, Text, View, TextInput, Button , FlatList} from 'react-native';
import film from '../filmsData'
import FilmItem from './filmsItem'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <View >
                    <TextInput style={styles.input_text} onKeyPress={() => { }} placeholder="Search a film" />
                </View>
                <View style={styles.button} >
                    <Button title="Search" onPress={() => { }} />
                </View>

                <FlatList
                    data={film}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({ item }) => <FilmItem film= {item}/>}
                />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    input_text: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },

    button: {
        marginRight: 5,
        height: 50,
        marginTop: 10,
        paddingLeft: 5
    }
})