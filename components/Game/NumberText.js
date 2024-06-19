import { View , Text,StyleSheet} from "react-native";
import Colors from "../../colors/Colors";

function NumberText({children}){
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default NumberText;

const styles=StyleSheet.create({
    container:{
       borderWidth:4,
       borderColor:Colors.yellow,
       padding:20,
       marginVertical:20,
       alignItems:'center',
       borderRadius:10
    },
    text:{
        fontSize:24,
        color:Colors.yellow,
        fontWeight:'bold'
    }
})