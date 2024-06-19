import { View,Text,StyleSheet } from "react-native";
import Colors from "../../colors/Colors";
function Title({children}){
    return (
        <View style={styles.title_wrapper}>
           <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
  title_wrapper:{
    padding:12,
    borderWidth:2,
    borderColor:Colors.white,
    alignItems:'center',
    maxWidth:'80%',
    width:300
  },
  text:{
    color:Colors.white,
    fontSize:22,
    fontWeight:'bold'
  }
})
export default Title;