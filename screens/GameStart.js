import { useState } from "react";
import PrimaryButtons from "../components/UI/PrimaryButtons";
import { View, StyleSheet, TextInput, Text, Alert, SafeAreaView } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../colors/Colors";
import GamePage from "./GamePage";
import InfoText from "../components/UI/Text";
import InfoContainer from "../components/UI/Info_Container";
import ButtonContainer from "../components/UI/ButtonContainer";
function GameStart({pickNum}) {
  const [enterText, SetenterText] = useState("");

  function textHandler(enteredText) {
    SetenterText(enteredText);
  }
  function resetText(){
    SetenterText('');
  }
  function confirmText(){
    var num=parseInt(enterText);
    if(isNaN(num) || num <= 0 || num>99){
        Alert.alert('Invalid Number','your input number is not correct',[{text:'OK', style:'destructive', onPress:resetText}])
    }else{
        pickNum(num);
    }
  }
  return (
    <View style={styles.main_container}>
      <Title>Guess My Number</Title>
      <InfoContainer>
      <InfoText>Enter a Number</InfoText>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        value={enterText}
        onChangeText={textHandler}
      />
      <ButtonContainer>
        <PrimaryButtons onPress={resetText}>Reset</PrimaryButtons>
        <PrimaryButtons onPress={confirmText}>Start</PrimaryButtons>
      </ButtonContainer>
    </InfoContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  main_container:{
    paddingTop:100,
    alignItems:'center'
  },
  input: {
    height: 50,
    width: 50,
    color: Colors.yellow,
    fontSize: 22,
    padding: 8,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.yellow,
  },
});

export default GameStart;
