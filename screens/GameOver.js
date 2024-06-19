import { View, Image, StyleSheet,Text } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../colors/Colors";
import PrimaryButtons from "../components/UI/PrimaryButtons";

function GameOver({restartGame,userNumber, guessRounds}){
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.image_container}>
            <Image style={styles.img} source={require('../assets/images/success.png')}></Image>
            </View>
            <Text style={styles.textParent}>Your phone needed <Text style={styles.textChild}>{guessRounds}</Text> rounds to guess the number <Text style={styles.textChild}>{userNumber}</Text></Text>
            <PrimaryButtons onPress={restartGame}>Start New Game</PrimaryButtons>
        </View>
    )
}

export default GameOver;

const styles=StyleSheet.create({
    rootContainer:{
       paddingTop:60,
       alignItems:'center'
    },
    image_container:{
        marginTop:20,
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.pink100,
        elevation:4,
        shadowColor:Colors.black,
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.25,
        shadowRadius:5,
        overflow:'hidden',
        alignItems:'center'
    },
    img:{
        width:'100%',
        height:'100%',
    },
    textParent:{
        fontSize:24,
        color:Colors.black,
        textAlign:'center',
        marginHorizontal:10,
        marginVertical:20
    },
    textChild:{
        color:Colors.red100,
    }
})