import { StyleSheet, ViewStyle } from "react-native";
import { RFValue } from "../../helpers/fontSize";
import Colors from '../../constants/Colors';

interface IStyles {
    container: ViewStyle;
    button: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
    container: {
        marginHorizontal: RFValue(5),
        marginBottom: RFValue(20)
    },
    button: {
        backgroundColor: Colors.primary.active
    }
});

export default styles;


