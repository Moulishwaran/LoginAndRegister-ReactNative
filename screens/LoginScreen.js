import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../services/firebaseAuth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkIfLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Dashboard");
      }
    });
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const handleLogin = () => {
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "green" }}>
        Login
      </Text>
      <TextInput
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
      />
      <Button title="Login" onPress={handleLogin} />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Text onPress={goToRegister} style={{ marginVertical: 10 }}>
        Create an account? Register here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: 200,
    marginVertical: 10,
    paddingHorizontal: 8,
  },
});
