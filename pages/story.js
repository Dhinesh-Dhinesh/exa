import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const Story = ({navigation}) => {
    return(
        <View style={styles.cent}>
            <Text style={styles.txt}>This is Story Page</Text>
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

export default Story;