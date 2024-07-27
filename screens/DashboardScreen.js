import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button, Text, View } from "react-native";
import auth from "../services/firebaseAuth";

export default function DashboardScreen({ navigation }) {
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginVertical: 10 }}>Welcome to Dashboard</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
