import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: sizes.screenWidth,
        height: sizes.screenHeight,
      },
      bgImage: {
        width: sizes.screenWidth,
        height: sizes.screenHeight,
        flexDirection: 'column',
        alignItems: 'center',
      },
      divider:{
        width:sizes.screenWidth*0.9,
        height:sizes.screenHeight*0.002,
        backgroundColor:colors.disabledBg,
        marginTop:sizes.screenHeight*0.03,
        alignSelf:'center',

      },
      title:{
        color:colors.black,
        marginTop:sizes.screenHeight*0.02,
        fontSize:fontSize.large,
        fontWeight:'500'
      },
      parentContainer:{
        marginHorizontal:sizes.screenWidth*0.05,
        height:sizes.screenHeight*0.6
      },
      bodyText:{
        color:colors.black,
        opacity:0.6,
        fontSize:fontSize.smallM,
        marginTop:sizes.screenHeight*0.01
      }
})