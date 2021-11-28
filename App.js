import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.house}
            source={require("./assets/house.png")}
          />
        </View>

        <View>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Smart Home
          </Text>
        </View>
      </View>
      <Text style={styles.title}>Roooms</Text>
      <View style={styles.room}>
        <View style={styles.box}>
          <Image
            style={styles.roomsImage}
            source={require("./assets/living-room.png")}
          />
          <Text style={styles.roomsText}>Living room</Text>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.roomsImage}
            source={require("./assets/bed.png")}
          />

          <Text style={styles.roomsText}>Bedroom </Text>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.roomsImage}
            source={require("./assets/kitchen.png")}
          />

          <Text style={styles.roomsText}>Kitchen </Text>
        </View>
      </View>

      <Text style={styles.title}>Devices</Text>
      <View style={styles.yellowBox}>
        <View style={{ flex: 7, flexDirection: "row" }}>
          <View
            style={[
              styles.miniBox,
              { backgroundColor: "green" }
            ]}
          ></View>
          <View>
            <Text style={{ marginLeft: 30 }}>Living Room Lamp</Text>
          </View>

        </View>{" "}

        <View style={{ flex: 1, flexDirection: "column" }}>
          
            <View
              style={{
                backgroundColor: "white",
                height: 20,
                width: 35,
                alignItems: "center",
                justifyItems: "center"
              }}
            >
              <Text style={{ color: "darkblue" }}>On</Text>
            </View>
        
         
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "darkblue" }}>Off</Text>
            </View>
       
        </View>
      </View>
      <View style={styles.yellowBox}>
        <View style={{ flex: 7, flexDirection: "row" }}>
          <View
            style={[
              styles.miniBox
             
            ]}
          ></View>
          <View>
            <Text style={{ marginLeft: 30 }}>Heater</Text>
          </View>
        </View>{" "}
        <View style={{ flex: 1, flexDirection: "column" }}>
         
            <View
              style={{
                backgroundColor: "white",
                height: 20,
                width: 35,
                alignItems: "center",
                justifyItems: "center"
              }}
            >
              <Text style={{ color: "darkblue" }}>On</Text>
            </View>
         
      
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "darkblue" }}>Off</Text>
            </View>
      
        </View>
      </View>
      <View style={styles.yellowBox}>
        <View style={{ flex: 7, flexDirection: "row" }}>
          <View
            style={[
              styles.miniBox
             
            ]}
          ></View>
          <View>
            <Text style={{ marginLeft: 30 }}>Tv</Text>
          </View>
        </View>{" "}
        <View style={{ flex: 1, flexDirection: "column" }}>
          
            <View
              style={{
                backgroundColor: "white",
                height: 20,
                width: 35,
                alignItems: "center",
                justifyItems: "center"
              }}
            >
              <Text style={{ color: "darkblue" }}>On</Text>
            </View>
        
            <View
              style={{
                height: 25,
                width: 35,
                backgroundColor: "white",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "darkblue" }}>Off</Text>
            </View>
         
        </View>
      </View>
      <Text style={{ fontWeight: "bold" }}>
        Total devices are on: 1 
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  room: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 38,
  },
  house: {
    marginRight: 25,
    width: 55,
    height: 55,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "start"
  },
  roomsImage: {
    height: 75,
    width: 75,
  },
  miniBox: {
    backgroundColor: "darkred",
    width: 20,
    height: 20,
  },
  box: {
    height: 125,
    width: 120,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "space-around",
  },
yellowBox: {
    padding: 13,
    backgroundColor: '#FFFACD',
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
    marginBottom: 30
  },
  roomsText: {
    paddingTop: 10
  },
  
});