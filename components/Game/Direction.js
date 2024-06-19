import { View,StyleSheet } from "react-native"
import PrimaryButtons from "../UI/PrimaryButtons"
import InfoText from "../UI/Text";
import InfoContainer from "../UI/Info_Container";
import ButtonContainer from "../UI/ButtonContainer";

import {Ionicons} from '@expo/vector-icons';
function Direction({direction}){
    return(
        <InfoContainer style={styles.container}>
           <InfoText>Lower or Higher</InfoText>
           <ButtonContainer>
            <View style={styles.buttonContainer}>
           <PrimaryButtons onPress={direction.bind(this,'lower')}>
            <Ionicons name='remove' size={24}></Ionicons>
            </PrimaryButtons>
           </View>
           <View style={styles.buttonContainer}>
           <PrimaryButtons onPress={direction.bind(this,'greater')}>
           <Ionicons name='add' size={24}></Ionicons>
           </PrimaryButtons>
           </View>
           </ButtonContainer>
        </InfoContainer>
    )
}

export default Direction;

const styles=StyleSheet.create({
    buttonContainer:{
        flex:1,
    }
})