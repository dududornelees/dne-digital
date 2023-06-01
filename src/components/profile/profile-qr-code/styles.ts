import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        borderWidth: 4,
        alignSelf: "stretch",
        borderRadius: 16,
        padding: 8,
        paddingTop: 16
    },
    qrCode: {
        width: 150,
        height: 150
    },
    code: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 18,
        marginTop: 12,
        fontWeight: "500"
    }
});
