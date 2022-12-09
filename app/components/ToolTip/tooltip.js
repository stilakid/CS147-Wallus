import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, TouchableOpacity,View, Text} from "react-native";
import { AppText } from "../CustomText/customText";


// Lucide Icons
import { X } from 'lucide-react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import {useState} from 'react'
import { AppButton } from "../Buttons/buttons";
import { readBuilderProgram } from "typescript";

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
            backgroundColor = 'rgba(0,0,0,0)'
        >
            <AppButton.toolTip onPress={() => {setTip(true); console.log('pressed')}} TouchableOpacityStyle={[styles.toolTipDefault, styles.columnValue]}/>
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