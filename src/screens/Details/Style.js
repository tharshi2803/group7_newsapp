import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    
    container: {
        backgroundColor:'#161517',
        flex:1
    },

    headline: {
        color:'white', 
        fontSize: 25, 
        marginTop: 10, 
        marginBottom: 10,
        textAlign:'center'
    },

    screen: {
        width: 400, 
        height: 300, 
        borderWidth: 3, 
        borderColor:'blue', 
        borderRadius:10
    },

    details: {
        borderRadius: 10, 
        color:'white',
        fontSize:15, 
        textAlign:'justify' , padding: 8 , margin: 8 
    }
})
