import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import wallpaper from "./assets/images/wallpaper.webp";
import NotificationsList from "./components/NotificationList";

export default function App() {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    let timer = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <NotificationsList
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Ionicons name="lock-closed" size={24} color="white" />
            <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
            <Text style={styles.time}>{date.format("hh:mm")}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>

        <View style={styles.icon}>
          <Ionicons name="camera" size={24} color="white" />
        </View>
      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  date: {
    color: "#C3FFFE",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
  },
  time: {
    fontSize: 82,
    fontWeight: "bold",
    color: "#C3FFFE",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignSelf: "stretch",
    height: 75,
  },
  icon: {
    backgroundColor: "#00000050",
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    overflow: "hidden",
  },
});

