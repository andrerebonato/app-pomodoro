import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { RFValue } from "../../helpers/fontSize";
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

interface IStyles {
    container: ViewStyle;
    title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
    container: {
        borderRadius: RFValue(5),
        marginTop: RFValue(20),
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: Colors.primary.white,
        position: 'absolute',
        top: RFValue(80)
    },
    title: {
        color: Colors.primary.white,
        fontSize: RFValue(100),
        fontFamily: Fonts.primary.bold,
        paddingLeft: RFValue(6),
        paddingRight: RFValue(3),
    }
});

export default styles;