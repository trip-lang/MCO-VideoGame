import { router } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const goToAddGame = () => {
    router.push("/add-game");
  };

  const goToCollection = () => {
    router.push("/collection");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          🎮 GameTrack
        </Text>

        <Text style={styles.subtitle}>
          Manage your game collection and backlog
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={goToAddGame}
        >
          <Text style={styles.buttonText}>
            ➕ Add Game
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={goToCollection}
        >
          <Text style={styles.buttonText}>
            🎮 My Collection
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#666",
  },

  button: {
    backgroundColor: "#222",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});