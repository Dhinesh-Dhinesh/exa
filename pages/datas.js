import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name:"datab.db",
        createFromLocation: 1,
    },
    () => {console.log("Success")},
    error => {console.log(error)}
);

const Datas = ({navigation}) => {
    
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    useEffect(()=>{
        getDatas();
    },[]);

    const getDatas = async () => {
        try{
            db.transaction( (tx)=>{
                tx.executeSql(
                    "SELECT Email, Pass FROM Users",
                    [],
                    (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0){
                        var userEmail = results.rows.item(0).Email;
                        var userPass = results.rows.item(0).Pass;
                        setEmail(userEmail);
                        setPass(userPass);
                    }
                    }
                )
            })
        } catch(err){
          alert(err)
        }
    }

    return(
        <View style={styles.cent}>
            <Text style={styles.txt}>Datas</Text>
            <Text style={{fontSize:15,marginTop:5,color:"black"}}>Email : {email}</Text>
            <Text style={{fontSize:15,color:"black"}}>Password : {pass}</Text>
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

export default Datas;