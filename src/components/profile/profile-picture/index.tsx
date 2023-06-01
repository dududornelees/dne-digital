import { Image } from "react-native";
import { styles } from "./styles";

export const ProfilePicture = () => {
    return <Image style={styles.container} source={require("../../../../assets/images/profile.jpg")} />;
};
