import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";


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
      codeFieldRoot: {
        // marginTop: sizes.screenHeight * 0.1,
        width: sizes.screenWidth * 0.9,
        padding: sizes.screenWidth * 0.05,
        alignSelf: 'center',
      },
      cell: {
        width: sizes.screenWidth * 0.11,
        height: sizes.screenHeight*0.09,
        lineHeight: sizes.screenHeight*0.09,
        fontSize: fontSize.h5,
        fontWeight:'500',
        borderWidth: 1,
        borderColor: colors.disabledBg2,
        textAlign: 'center',
        color: colors.black,
        borderRadius:sizes.screenWidth*0.04
      },
      focusCell: {
        borderColor: '#000',
      },

      BtnBlack: {
        width: sizes.screenWidth * 0.85,
        backgroundColor: colors.black,
        alignSelf: 'center',
        borderRadius: sizes.screenHeight * 0.2,
        flexDirection: 'row',
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        height: sizes.screenHeight * 0.08,
        marginTop: sizes.screenHeight * 0.065,
        
        
      },
      BtnBlackText: {
        color: colors.white,
        marginLeft: sizes.screenWidth * 0.03,
        marginRight: sizes.screenWidth * 0.03,
        fontSize: fontSize.medium,
      },
      loginTextView:{
        flexDirection:'row',
        // backgroundColor:'red',
        marginTop:sizes.screenHeight*0.02
      },
      loginText:{
        color:colors.disabledBg2
      },
      loginLink:{
        color:colors.textBlue
      },
      bodyText:{
        textAlign:'center',
        fontSize:fontSize.h6,
        marginBottom:sizes.screenHeight*0.02,
        color:colors.disabledBg2,
        width:sizes.screenWidth*0.8
      },
      forgotPassImg:{
        width:sizes.screenWidth*0.75,
        height:sizes.screenHeight*0.35,
        marginVertical:sizes.screenHeight*0.03
      },
      inputField: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: sizes.screenWidth * 0.85,
        borderWidth: sizes.screenWidth * 0.003,
        borderColor: colors.disabledBg2,
        borderRadius: sizes.screenWidth * 0.1,
        padding: sizes.screenWidth * 0.01,
        paddingHorizontal: sizes.screenWidth * 0.05,
        marginVertical: sizes.screenHeight * 0.01,
      },
      inputFieldText:{
        width:sizes.screenWidth*0.6,
        color:colors.black
      },
})