import React from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import chatRoomData from "../data/Chats";
import InputBox from "../components/InputBox";


const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <>
        <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}

        />
        <InputBox />
        </>
    )
}

export default ChatRoomScreen;