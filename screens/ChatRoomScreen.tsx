import React from "react";
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";


const ChatRoomScreen = () => {
    
    const route = useRoute();
    

    return (
        <Text>Hello from Chat Room</Text>
    )
}

export default ChatRoomScreen;