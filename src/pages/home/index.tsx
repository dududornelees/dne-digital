import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Header } from "../../components";
import { styles } from "./styles";

export const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" backgroundColor="#8d9900" />
            <Header />
        </View>
    );
};
