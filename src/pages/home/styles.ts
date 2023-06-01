import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cedf00",
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 16
    },
    profilePictureAndQrCode: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16
    },
    profileInfo: {
        marginTop: 16
    }
});
