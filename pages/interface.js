import React,{useState,useEffect,} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import SQLite from 'react-native-sqlite-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Datas from "./datas";

const Stack = createNativeStackNavigator();

const db = SQLite.openDatabase(
    {
        name:"datab.db",
        createFromLocation: 1,
    },
    () => {console.log("Success")},
    error => {console.log(error)}
);

export default function Interface({navigation}) {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    useEffect(()=> {
        createTable();
        getDatas();
    }, []);

    const createTable = async () => {
        await db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS"
                +"Users"
                +"(ID INTEGER PRIMARY KEY AUTOINCREMENT,Email TEXT,Pass TEXT);"
            )
        })
    };

    const setDatas = async () => {
        try{
          if(!pass || !email){
            alert("none")
            return;
          }
          await db.transaction(async (tx)=>{
              tx.executeSql(  
                "UPDATE Users SET Email = ?,Pass =? WHERE ID = 1;",[email,pass],
                ()=>{},
                (err)=>{console.log(err)}
              )
          })
        } catch (err) {
          alert(err)
        }
    }

    const getDatas = async () => {
        try{
          db.transaction( (tx)=>{     
                tx.executeSql(
                  "SELECT Email, Pass FROM Users",
                  [],
                  (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0){
                        navigation.navigate("DATAS");
                    }
                  }
            )
          })
        } catch(err){
          alert(err)
        }
    }

    return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#fff'
                name='heartbeat'
                type='font-awesome'
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Login</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                onChangeText={(val)=> setEmail(val)}
                // textContentType='emailAddress'
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(val)=> setPass(val)}
                // secureTextEntry={true}
                // textContentType='password'
              />
            </View>
            <TouchableOpacity  onPress={setDatas} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff7979',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#eb4d4b',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});

<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}}>
  <Stack.Screen name="INTERFACE" component={Interface} />
  <Stack.Screen name="DATAS" component={Datas} />
</Stack.Navigator>
</NavigationContainer>