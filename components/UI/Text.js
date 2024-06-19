import { Text, StyleSheet } from "react-native";
import Colors from "../../colors/Colors";
function InfoText({children}){
return (
    <Text style={styles.text}>{children}</Text>
)
}

export default InfoText;

const styles=StyleSheet.create({
    text: {
        fontFamily:'cramelBurger',
        fontSize: 28,
        color: Colors.yellow,
      },
})