import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { RFValue } from "../../helpers/fontSize";
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

interface IStyles {
    container: ViewStyle;
    title: TextStyle;
    subTitle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
    container: {
        height: RFValue(100),        
        justifyContent: 'center',
    },
    title: {
        fontSize: RFValue(22),
        fontFamily: Fonts.primary.regular,
        color: Colors.primary.white,
        marginTop: RFValue(20),
        marginBottom: RFValue(25),
        textAlign: 'center'
    },
    subTitle: {
        fontFamily: Fonts.primary.regular,
        fontSize: RFValue(14),
        color: Colors.primary.white,
        marginBottom: RFValue(25),
        textAlign: 'center',
    }
});

export default styles;