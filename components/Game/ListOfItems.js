import { View, Text, StyleSheet } from "react-native";
import Colors from "../../colors/Colors";

function ListofItems({numberOfGuess, guessNumber}){
  return (
    <View style={styles.rootContainer}>
        <Text style={styles.text}>#{numberOfGuess}</Text>
        <Text style={styles.text}>Opponent's Guess: {guessNumber}</Text>
    </View>
  )
}

export default ListofItems;

const styles= StyleSheet.create({
    rootContainer:{
        backgroundColor:Colors.yellow,
        padding:10,
        borderWidth:2,
        borderColor:Colors.black,
        elevation:4,
        shadowColor:Colors.black,
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.50,
        shadowRadius:5,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:10,
        marginVertical:6,
    },
    text:{
        fontSize:14,
        color:Colors.black,
    }
})