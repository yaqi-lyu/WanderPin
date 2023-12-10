import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../styles/Colors";
import PressableButton from "./PressableButton";

const HomeJournalCard = ({ journal, pressCardHandler }) => {
  const firebaseUpdateTime = new Date(
    journal.date.seconds * 1000 + journal.date.nanoseconds / 1e6
  );
  const updateTime = firebaseUpdateTime.toLocaleDateString();

  const pressHandler = () => {
    pressCardHandler(journal);
  };

  return (
    <PressableButton onPressFunction={pressHandler}>
      <View style={styles.cardContainer}>
        {journal.images.length != 0 && (
          <Image
            style={styles.img}
            resizeMode="cover"
            source={{
              uri: journal.images[0],
            }}
          />
        )}
        <View style={styles.info}>
          <Text style={styles.title}>{journal.title}</Text>
          <View style={styles.subtitle}>
            <Text>{journal.location}</Text>
            <Text>{updateTime}</Text>
          </View>
        </View>
      </View>
    </PressableButton>
  );
};

export default HomeJournalCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0.3,
    color: colors.lightWhite,
    borderRadius: 15,
  },
  img: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  info: { padding: 10, color: colors.white },
  title: {
    fontWeight: "900",
  },
  subtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
});
