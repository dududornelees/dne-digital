import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header, ProfilePicture, ProfileQrCode, ProfileInfo } from "../../components";
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
        </View>
    );
};
