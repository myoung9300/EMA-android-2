import { ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";
import PDFReader from "rn-pdf-reader-js";

const Pdf = ({ uri }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PDFReader
        source={{ uri: `https://ema-planner.herokuapp.com/${uri}.pdf` }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="black" size="large" />}
      />
    </SafeAreaView>
  );
};

export default Pdf;
