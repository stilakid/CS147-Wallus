import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, TouchableOpacity,View, Text} from "react-native";
import { AppText } from "../CustomText/customText";


// Lucide Icons
import { X } from 'lucide-react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import {useState} from 'react'
import { AppButton } from "../Buttons/buttons";

export const MyTooltip = ({text}) => {
    const [showTip, setTip] = useState(false);
    return (
        
        <Tooltip
            isVisible={showTip}
            content={
                <View>
                    <AppText.ParagraphTwo style={{color: Themes.colors.white}}>{text}</AppText.ParagraphTwo>
                </View>
            }
            onClose={() => setTip(false)}
            placement="right"
            contentStyle={{backgroundColor:Themes.colors.neutral_700}}
        >
            <AppButton.toolTip Press={() => setTip(true)} TouchableOpacityStyle={[styles.toolTipDefault, styles.columnValue]}/>
        </Tooltip>
    );

}




// **********************************************************************************************
// Styles
// **********************************************************************************************

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.neutral_700,
        borderRadius: 12,
       

    },
    toolTipDefault: {
        marginLeft: 4
    },
    columnValue: {
        marginTop: 4
    },
})