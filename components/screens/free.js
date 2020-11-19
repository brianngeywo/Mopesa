import React from 'react'
import { Button, Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";


export default function Free() {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={{marginHorizontal: 20,marginVertical: 10,textTransform: "uppercase", fontSize: 20,}}>Todays Free predictions</Text>
                <View style={styles.MatchCard}>
                    <Text style={styles.MatchCardTeams}>Man Utd vs Everton</Text>
                    <Text style={styles.MatchCardPrediction}>Prediction: GG</Text>
                    <Text style={styles.MatchCardStartTime}>Start: 1700hrs</Text>
                </View>
                <View style={styles.MatchCard}>
                    <Text style={styles.MatchCardTeams}>man Utd vs Everton</Text>
                    <Text style={styles.MatchCardPrediction}>Prediction: GG</Text>
                    <Text style={styles.MatchCardStartTime}>Start: 1700hrs</Text>
                </View>
                <View style={styles.MatchCard}>
                    <Text style={styles.MatchCardTeams}>Man Utd vs Everton</Text>
                    <Text style={styles.MatchCardPrediction}>Prediction: GG</Text>
                    <Text style={styles.MatchCardStartTime}>Start: 1700hrs</Text>
                </View>
                <Text style={styles.TotalOdds}>total odds: 20.86</Text>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    buttonView: {
        marginHorizontal: 50,
        marginVertical: 10,
        textTransform: "capitalize"
    },
    MatchCard: {
        marginVertical: 10,
        marginHorizontal: 50,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#a9a9a9",
        borderRadius: 5,
        padding: 10,
        borderBottomWidth: 2,
        borderRightWidth: 2,
    },
    MatchCardTeams: {
        fontSize: 20,
        fontWeight: "600",
        textTransform: "capitalize"
    },
    MatchCardPrediction: {
        fontSize: 18,
        fontWeight: "100"
    },
    MatchCardStartTime: {
        fontSize: 18,
        fontWeight: "100"
    },
    TotalOdds: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 30,
        textTransform: "uppercase",
        marginVertical: 50,
    },
})