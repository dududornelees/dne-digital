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
        marginTop: 28
    },
    profileInfo: {
        marginTop: 28
    },
    certificateContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    certificateButton: {
        gap: 2,
        flexDirection: "row",
        backgroundColor: "#006c47",
        borderRadius: 100,
        padding: 8,
        paddingHorizontal: 12,
        alignItems: "center"
    },
    certificateText: {
        color: "#cedf00"
    }
});
