import { View,Text,Pressable,StyleSheet } from "react-native";
import Colors from '../../colors/Colors'
function PrimaryButtons({children,onPress}){
  return (
    <View style={styles.button_outer_container}>
      <Pressable 
      onPress={onPress} 
      style={({pressed})=>pressed? [styles.button_inner_container,styles.pressed]:styles.button_inner_container} 
      android_ripple={{color:'#68063c'}}>
        <Text style={styles.button_text}>{children}</Text>
      </Pressable>
  </View>
  )
}

const styles=StyleSheet.create({
      button_outer_container:{
        borderRadius:20,
        overflow:'hidden',
        margin:6
      },
      button_inner_container:{
        backgroundColor:Colors.red100,
        paddingVertical:8,
        paddingHorizontal:26,
        alignItems:'center',
        elevation:2,
      },
      button_text:{
        color:Colors.white,
        fontSize:16,
      },
      pressed:{
        opacity:0.75,
      }
    
})
export default PrimaryButtons;