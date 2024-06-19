import { View , StyleSheet} from "react-native";

function ButtonContainer({children}){
    return(
        <View style={styles.button_container}>{children}</View>
    )
}

export default ButtonContainer;
const styles= StyleSheet.create({
    button_container: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      },
})