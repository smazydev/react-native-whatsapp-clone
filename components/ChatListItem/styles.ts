import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent:"space-evenly",
        padding: 10,
    },
    leftContainer : {
        
    },
    textContainer: {
        width: 200,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    username:{
        fontWeight: "bold",
        fontSize: 16,
    },
    lastMessage:{
        fontSize: 16,
        color: "grey",
    },
    time: {
        fontSize:14,
        color:"grey",
        marginTop: 3,
    }
})

export default styles;