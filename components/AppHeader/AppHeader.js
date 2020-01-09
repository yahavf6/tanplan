import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Avatar} from 'react-native-elements'
import LocationSearchBar from "../LocationSearchBar/LocationSearchBar";

const AppHeader = props => {
    return (
        <View style={styles.container}>
            <Header
                placement="left"
                leftComponent={{icon: 'menu', color: '#9b9b9b'}}
                centerComponent={<LocationSearchBar/>}
                rightComponent={<Avatar
                    rounded
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />}
                backgroundColor={'#ffffff'}
                containerStyle={styles.headerContainer}
                centerContainerStyle={styles.headerCol}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    headerContainer: {
        borderBottomColor: '#bdc1c6',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    headerCol: {
        backgroundColor: 'transparent'
    }
});

export default AppHeader
