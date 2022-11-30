import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity,} from "react-native";
import { textChangeRangeIsUnchanged } from "typescript";
import { Themes} from "../../../assets/themes"
import { AppText } from "../CustomText/customText";

// export const AppText = ({style, ...props }: AppTextProps) => (
//     <Text {...props} style={[styles.default, style]} />
// )

// AppText.TitleOne = ({style, ...props }: AppTextProps) => (
//     <AppText {...props} style={[styles.titleOne, style]} />
// )

export const Buttons = ({text, goTo}) => (
    <TouchableOpacity onPress={()=>goTo} style={styles.ButtonContainer}>
            <AppText.LabelFour style={styles.ButtonText}>
                {text} 
            </AppText.LabelFour>
    </TouchableOpacity>
)

Buttons.FullWidth48Blue = ({text, goTo}) => (
    <Buttons text={text}/>)

Buttons.Small48Blue = ({text, goTo}) => (
    <Buttons text={text} style={{width: 131,}}/>)


Buttons.HalfWidth48Blue = (props) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer, {width: 173,} }>
            <AppText.LabelFour style={styles.ButtonText}>
                props.text 
            </AppText.LabelFour>
    </TouchableOpacity>
)

Buttons.Medium48Blue = (props) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer, {width: 249,} }>
            <AppText.LabelFour style={styles.ButtonText}>
                props.text 
            </AppText.LabelFour>
    </TouchableOpacity>
)

Buttons.FullWidth32Blue = (props) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer, {height: 32,} }>
            <AppText.LabelFour style={styles.ButtonText}>
                props.text 
            </AppText.LabelFour>
    </TouchableOpacity>
)

Buttons.Small32Blue = (props) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer, {height: 32, width: 131} }>
            <AppText.LabelFour style={styles.ButtonText}>
                props.text 
            </AppText.LabelFour>
    </TouchableOpacity>
)

Buttons.HalfWidth32Blue = (props) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer, {height: 32, width:173} }>
            <AppText.LabelFour style={styles.ButtonText}>
                props.text 
            </AppText.LabelFour>
    </TouchableOpacity>
)

Buttons.Medium32Blue = (props) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer, {height: 32, width: 249} }>
            <AppText.LabelFour style={styles.ButtonText}>
                props.text 
            </AppText.LabelFour>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
      },
    ButtonContainer: {
        backgroundColor: Themes.colors.primary_700,
        borderBottom: 4,
        borderBottomColor: Themes.colors.primary_900,
        borderRadius: 32,
        position: "absolute",
        width: 358,
        height: 48,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        gap: 8,
    },
    ButtonText:{
        width: 48,      
        height: 19,
        color: "#FFFFFF",   
        order: 0,
    }
    
});