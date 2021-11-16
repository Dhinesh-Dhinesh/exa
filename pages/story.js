import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const Story = () => {
    const [pass,setPass] = useState('');

    function pg () {
        const charset = 'aEFGHI7bcdhi01NOPXYZ2$3fklpqrsQRSTuv%emnofgwxy4#56zABCD89JKUVWtLM';
        const max = 12;
        var pass = '';

        for (let i = 0; i <= max; i++) {
            const rval = Math.floor(Math.random() * charset.length + 1);
            pass += charset.charAt(rval);
        }

        setPass(pass);
    }

    return(
        <View style={styles.cent}>
            <Text style={styles.txt}>Password Generator</Text>
            <Text style={{fontSize:25}}>{pass}</Text>
            <Button title="Generate Pass" onPress={pg}/>
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