import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Text} from 'react-native'


const UserMaps = props =>{
    return (
        <View style={styles.container}>
            <MapView
                style={styles.container}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});

export default UserMaps
