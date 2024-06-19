import { View,StyleSheet,Dimensions,useWindowDimensions } from "react-native";
import Colors from "../../colors/Colors";
function InfoContainer({children}) {
  const {width, height}=useWindowDimensions();
  const maxwidthh=height<400? '100%':'80%'
  const widthh=height<400? '60%':'80%'
  return <View style={[styles.info_container,{maxWidth:maxwidthh,width:widthh}]}>{children}</View>;
}
export default InfoContainer;
const deviceHieght=Dimensions.get('window').height;
console.log(deviceHieght)
const styles= StyleSheet.create({
    info_container: {
        padding: 16,
        marginTop: 20,
        paddingHorizontal:35,
        backgroundColor: Colors.pink100,
        borderRadius: 8,
        elevation: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 6,
        shadowRadius: 2,
        alignItems: "center",
      },
})