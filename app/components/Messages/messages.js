import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import { Text, View } from "react-native";

// type Message = {
//     id: string,
//     created_at: string,
//     content: string,
//     profile_id: string
// }

// TODO: I hardcoded the user profile_id in this page because the new version of supabase has removed the ability
// to retrieve current user data from browser context. We can only get it through a request to the server and it is an async function,
// which is not playing well with the code. 

export default function Messages() {
    const [messages, setMessages] = useState([])

    const getData = async () => {
        const { data } = await supabase
            .from('messages')
            .select('*, profile: profiles(username)');

        if (!data) {
            console.warn('no data');
            return
        }

        setMessages(data);
    } 

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        const subscription = supabase
            .channel('public:messages')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, () => {
                getData();
            })
            .subscribe()

        return () => {
            supabase.removeChannel(subscription);
        }
    }, []);


    // const { data: { user } } = await supabase.auth.getUser();
    // console.log('userID', data);

    return (
        messages.map(message => (
            <View style={{}} >
                <Text
                    style={{
                        backgroundColor: (message.profile_id === '1cb8a13e-5957-4646-be6b-9cb06f396ec9') ? 'red' : 'blue'
                    }}
                >
                    {message.profile.username}
                </Text>
                <Text>
                    {message.content}
                </Text>
            </View>
        ))
    )
}