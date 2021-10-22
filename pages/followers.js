import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const Followers = ({navigation}) => {
    return(
        <View style={styles.cent}>
            <Text style={styles.txt}>This is Followers Page</Text>
            <Button title="go back" onPress={()=>navigation.goBack()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
    txt:{
        fontSize:30,
        color:"black",
        marginBottom: 10,

    },
    cent:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Followers;