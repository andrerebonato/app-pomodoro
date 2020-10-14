import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { RFValue } from "../../helpers/fontSize";
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

interface IStyles {
    root: ViewStyle;
    title: TextStyle;
    text: TextStyle;
    inputContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
    root: {
        flex: 1,
        backgroundColor: Colors.primary.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 10,
        textAlign: "center",
        fontSize: RFValue(20),
        fontFamily: Fonts.primary.regular,
        color: Colors.primary.black
    },
    inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: RFValue(10)
    },
    text: {
        marginTop: 15,
        fontSize: RFValue(14),
        fontFamily: Fonts.primary.regular,
        textAlign: "center"
    }
});

export default styles;