import React, {useState} from 'react';
import {SearchBar, Icon} from 'react-native-elements';
import {StyleSheet, View} from "react-native";


const LocationSearchBar = props => {
    const [search, setSearch] = useState();

    return (
        <View style={styles.container}>
            <SearchBar
                round
                showCancel
                placeholder="Where do you plan to tan?"
                onChangeText={search => setSearch(search)}
                value={search}
                searchIcon={<Icon name={'search'}/>}
                containerStyle={styles.searchBarContainer}
                inputStyle={styles.searchInput}
                inputContainerStyle={styles.inputContainerStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent',
        borderWidth: 0, //no effect
        shadowColor: 'white', //no effect
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0, //no effect
        shadowColor: 'white', //no effect
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    searchInput: {
        backgroundColor: 'transparent',
        borderWidth: 0, //no effect
        shadowColor: 'white', //no effect
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    inputContainerStyle: {
        backgroundColor: '#f0f0f0'
    }
});

export default LocationSearchBar
