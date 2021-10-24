import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.viewArea}>
            <Text style={styles.txt}>Home Screen</Text>
            <View style={styles.btn}>
                <Button title="Profile" onPress={()=>navigation.navigate("PROFILE")}/>
            </View>
            <View style={styles.btn}>
                <Button title="Followers" onPress={()=>navigation.navigate("FOLLOWERS")}/>
            </View>
            <View style={styles.btn}>
                <Button title="Story" onPress={()=>navigation.navigate("STORY")}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    txt:{
        fontSize:30,
        color:"black",
        marginBottom: 10,

    },
    viewArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        margin: 7,
    }
});

export default Home;