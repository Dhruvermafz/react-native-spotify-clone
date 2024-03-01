import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
const ArtistCard = ({ item }) => {
  return (
    <View style={{ margin: 10 }}>
      <Image style={{ width: 130, height: 130, borderRadius: 5 }} />

      <Text
        style={{
          fontSize: 13,
          fontWeight: "500",
          color: "White",
          marginTop: 10,
        }}
      >
        {item?.name}
      </Text>
    </View>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({});
