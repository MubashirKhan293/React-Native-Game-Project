import {
  View,
  StyleSheet,
  Alert,
  Text,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import Title from "../components/UI/Title";
import { useEffect, useState } from "react";
import NumberText from "../components/Game/NumberText";
import Direction from "../components/Game/Direction";
import ListofItems from "../components/Game/ListOfItems";


function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minnum = 1;
let maxnum = 100;

function GamePage({ userNumber, gameOver }) {
  const [currentGuess, SetCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  const [numberOfGuess,SetnumberOfGuess]=useState([currentGuess])

  


  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOver(numberOfGuess.length);
    }
  }, [currentGuess, userNumber, gameOver]);

  useEffect(()=>{
    minnum=1,
    maxnum=100
  },[])

  const GuessLength=numberOfGuess.length;

  function directionHandler(Direction) {
    if (
      (Direction === "lower" && currentGuess < userNumber) ||
      (Direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know the right direction", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (Direction === "lower") {
      maxnum = currentGuess;
    } else {
      minnum = currentGuess + 1;
    }
    const otherGuess = generateRandomBetween(minnum, maxnum, currentGuess);
    SetCurrentGuess(otherGuess);
    SetnumberOfGuess(previousGuessnumber=>([otherGuess,...previousGuessnumber]))
  }

  return (
    <View>
    <View style={styles.main_container}>
      <Title>Game Page</Title>
      <View style={styles.container}>
        <NumberText>{currentGuess}</NumberText>
        <Direction direction={directionHandler} />
      </View>
     
    </View >
     <View style={styles.listView}>
     <FlatList
     data={numberOfGuess}
     renderItem={(itemData)=><ListofItems numberOfGuess={GuessLength-itemData.index} guessNumber={itemData.item}/>}
     keyExtractor={(item)=>item}
     >
     </FlatList>
     </View>
     </View>
  );
}
const deviceWidth= Dimensions.get('window').width;
console.log(deviceWidth)
export default GamePage;

const styles = StyleSheet.create({
  main_container:{
    marginTop:deviceWidth<450? 30:50,
    paddingTop:25,
    alignItems:'center',
  },
  container: {
    paddingHorizontal: 10,
  },
  listView:{
    height:326,
    paddingHorizontal:35
  }
});
