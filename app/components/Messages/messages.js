import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import { Text, View, StyleSheet, Image } from "react-native";
import { Themes, Images } from "../../../assets/themes";
import { AppText } from "../CustomText/customText";

// type Message = {
//     id: string,
//     created_at: string,
//     content: string,
//     profile_id: string
// }

// TODO: I hardcoded the user profile_id in this page because the new version of supabase has removed the ability
// to retrieve current user data from browser context. We can only get it through a request to the server and it is an async function,
// which is not playing well with the code. 

export default function Messages({scrollRef}) {
    const [messages, setMessages] = useState([])

    const getData = async () => {
        const { data } = await supabase
            .from('messages')
            .select('*, profile: profiles(username)');

        if (!data) {
            // console.warn('no data');
            return
        }

        setMessages(data);

        if (scrollRef) {
            scrollRef.current?.scrollToOffset({offset: 0});
        }
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
            <View style={[
                styles.senderBlock,
                {
                    flexDirection: (message.profile_id === '1cb8a13e-5957-4646-be6b-9cb06f396ec9') ? 'row-reverse' : 'row',
                }
                ]}
                >
                <Image
                    source={(message.profile_id === '1cb8a13e-5957-4646-be6b-9cb06f396ec9') ? Images.userProfilePics.pic1 : Images.userProfilePics.pic2}
                    style={styles.userIcon}
                />
                <View style={styles.messageOuterContainer} >
                    <AppText.LabelSemiBoldTwo style={
                        {
                            textAlign: (message.profile_id === '1cb8a13e-5957-4646-be6b-9cb06f396ec9') ? 'right' : 'left'
                        }
                    }
                    >
                        {message.profile.username}
                    </AppText.LabelSemiBoldTwo>
                    <View style={[styles.messageContainer, { backgroundColor: (message.profile_id === '1cb8a13e-5957-4646-be6b-9cb06f396ec9') ? Themes.colors.primary_700 : Themes.colors.white }]}>
                        <AppText.ParagraphTwo style={
                            {
                                color: (message.profile_id === '1cb8a13e-5957-4646-be6b-9cb06f396ec9') ? Themes.colors.white : Themes.colors.neutral_600
                            }
                        }
                        >
                            {message.content}
                        </AppText.ParagraphTwo>
                    </View>
                </View>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    senderBlock: {
        flexDirection: 'row'
    },
    messageOuterContainer: {
        marginHorizontal: 8
    },
    messageContainer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: Themes.colors.primary_700,
        borderRadius: 16,
        marginVertical: 8
    },
    userIcon: {
        width: 32,
        height: 32
    }
});

