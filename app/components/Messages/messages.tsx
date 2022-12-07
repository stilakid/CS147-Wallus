import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import { Text } from "react-native";

type Message = {
    id: string,
    created_at: string,
    content: string,
    profile_id: string
}

export default function Messages() {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from<Message>('messages').select('*');
            console.log('data', {data});
            if (!data) {
                console.warn('no data');
                return
            }
            setMessages(data);
        }

        getData();
    }, []);

    return (
        messages.map(message => <Text>{message.content}</Text>)
    )
}