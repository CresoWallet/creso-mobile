import { colors, fontSize, sizes } from "../../services";

const { StyleSheet } = require("react-native");


export const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.black,
        color:colors.white,
        width:sizes.screenWidth*0.93,
        height:sizes.screenHeight*0.073,
        borderRadius:sizes.screenHeight*0.035,
        
    },
    text:{
        color:colors.white,
        textAlign:'center',
        paddingTop:sizes.screenHeight*0.02,
        fontSize:fontSize.large,
    },
    buttonField:{
        position:'absolute',
        marginTop:sizes.screenHeight*0.88,
    }
})