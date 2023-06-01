import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header, ProfilePicture, ProfileQrCode, ProfileInfo } from "../../components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";

export const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" backgroundColor="#8d9900" />
            <Header />

            <View style={styles.profilePictureAndQrCode}>
                <ProfilePicture />
                <ProfileQrCode />
            </View>

            <View style={styles.profileInfo}>
                <ProfileInfo />
            </View>

            <View style={styles.certificateContainer}>
                <View style={styles.certificateButton}>
                    <Icon name="shield-check-outline" color="#cedf00" size={22} />
                    <Text style={styles.certificateText}>Certificado</Text>
                </View>
            </View>
        </View>
    );
};
