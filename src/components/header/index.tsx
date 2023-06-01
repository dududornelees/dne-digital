import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/images/dne-logo.png")} />

            <View style={styles.menu}>
                <Image style={styles.menu.logo} source={require("../../../assets/images/une-logo.png")} />
                <Icon name="menu" size={38} color="#000000" />
            </View>
        </View>
    );
};
