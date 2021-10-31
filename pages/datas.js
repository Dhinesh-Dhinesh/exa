import React,{useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setEmail, setPass, getApiData} from "../redux/action";
import PushNotification from 'react-native-push-notification';

const db = SQLite.openDatabase(
    {
        name:"datab.db",
        createFromLocation: 1,
    },
    () => {console.log("Success")},
    error => {console.log(error)}
);

const Datas = ({navigation}) => {
    
    const {email, pass, getApi} = useSelector(state=> state.userReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        getDatas();
        dispatch(getApiData());
        createChannel();
    },[]);

    const createChannel = () => {
        PushNotification.createChannel(
          {
            channelId: "test-channel",
            channelName: "Test Channel"
          }
        )
      };

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
                        dispatch(setEmail(userEmail));
                        dispatch(setPass(userPass));
                    }
                    }
                )
            })
        } catch(err){
          alert(err)
        }
    }

    const handleNotification = (item) => {
        PushNotification.localNotification({
            channelId: "test-channel",
            title: "You clicked on " + item.first_name,
            message: "User " + item.id + "\nLast Name :" + item.last_name,
        })
    }

    return(
        <View style={styles.cent}>
            <Text style={styles.txt}>Datas</Text>
            <Text style={{fontSize:15,marginTop:5,color:"black"}}>Email : {email}</Text>
            <Text style={{fontSize:15,color:"black"}}>Password : {pass}</Text>
            <Button title="go back" onPress={()=>navigation.goBack()}/>
            <FlatList
            style={{marginTop:35}}
            data = {getApi}
            keyExtractor={(item , index )=> index.toString()}
            renderItem={( {item} )=> (
                <TouchableOpacity onPress={()=>{handleNotification(item)}}>
                <View style={{ marginTop: 9, borderWidth: 2, width: 270 ,backgroundColor:"#219DEE"}}>
                    <Text style={{ fontSize: 20, color: "black", paddingLeft: 5 }}>USER :{item.id}</Text>
                    <Text style={{ marginTop: 3, paddingLeft: 10, color: "black" }}>First Name : {item.first_name}</Text>
                    <Text style={{ paddingLeft: 10, color: "black" }}>Last Name : {item.last_name}</Text>
                </View>
                </TouchableOpacity>
            )}
            />
            
            
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