import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 70
    },
    logo: {
        width: 185,
        height: 54
    },
    menu: {
        gap: 16,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",

        logo: {
            width: 48,
            height: 48
        }
    }
});
