import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export const ProfileQrCode = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../../../assets/images/qr-code.png")} style={styles.qrCode} />
            <Text style={styles.code}>RC6BDF</Text>
        </View>
    );
};
