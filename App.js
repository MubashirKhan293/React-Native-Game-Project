
import {View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import GameStart from './screens/GameStart';
import GamePage from './screens/GamePage';
import { LinearGradient } from 'expo-linear-gradient';
import { useState,useEffect,useCallback } from 'react';
import Colors from './colors/Colors';
import GameOver from './screens/GameOver';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

 function App() {
  const [mynum,Setmynum]=useState(0);
  const [gameOver,SetGameOver]=useState(true);
  const [guessRounds,SetguessRounds]=useState(0);

  const [load]=useFonts({
    'cramelBurger':require('../Ggame/assets/Fonts/CaramelBurgerDemoRegular.ttf')
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (load) {
      await SplashScreen.hideAsync();
    }
  }, [load]);

  if (!load) {
    return null;
  }

  
  function pickMynum(num){
    Setmynum(num)
    SetGameOver(false)
  }

  function gameOverHandler(guessRounds){
    SetGameOver(true)
    SetguessRounds(guessRounds)
  }
  function restartGame(){
    SetGameOver(false)
    Setmynum(0)
    SetguessRounds(0)
  }
  var screen= <GameStart pickNum={pickMynum}/>
  
  if(mynum){
    screen=<GamePage userNumber={mynum} gameOver={gameOverHandler}/>
  }
  
  if(gameOver && mynum){
   screen = <GameOver restartGame={restartGame} userNumber={mynum} guessRounds={guessRounds}/>
  }
  
 

  return (
    <LinearGradient style={styles.main_container} colors={[Colors.pink100,Colors.yellow]} onLayout={onLayoutRootView}>
      <ImageBackground imageStyle={styles.back_img} style={styles.main_container} source={require('./assets/images/background.png')} resizeMode='cover'>
      <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
main_container:{
  flex:1
},
back_img:{
 opacity:0.15
}
});

export default App;