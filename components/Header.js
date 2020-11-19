import React from 'react'
import { View, Text, StyleSheet,  TouchableWithoutFeedback } from "react-native";

const Header = props => {
    const {
        navigationState,
        navigation,
        activeTintColor,
        inactiveTintColor
    } = props;
    const activeTabIndex = navigation.state.index;
  return (
    <View style={styles.containerHeader}>
      <View style={styles.textContainer}>
        <Text style={styles.textWhite}>Win Bets</Text>
        <Text style={styles.textWhiteSmall}>win cash daily</Text>
      </View>
      <View style={styles.tabContainer}>
          {navigationState.routes.map((route, index) => {
              const isRouteActive = index === activeTabIndex;
              const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
              return (
                  <TouchableWithoutFeedback
                  onPress={() => navigation.navigate(route.routeName)}
                  key={route.routeName}
                  >
                      <View>
                          <Text
                            style={{
                                fontSize: 17,
                                textTransform: "capitalize",
                                color: `${tintColor}`,
                                fontWeight: `${isRouteActive ? "700" : "normal"}`
                            }}
                            >
                                {route.routeName}
                            </Text>
                      </View>
                  </TouchableWithoutFeedback>
              );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        paddingTop: 50,
        paddingBottom: 20,
        marginTop: 10,
        backgroundColor: "#191970",
        width: "100%"
    },
    textWhite: {
        color: "white",
        marginVertical: 2,
        textTransform: "capitalize",
        fontSize: 35,
        alignSelf: "center",
        fontWeight: "700",
        paddingBottom: 10
    },
    tabContainer: {
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        height: "20%",
        alignItems: "center",
        height: 50,
    },
    tabText: {
        textTransform: "capitalize"
    },
    textWhiteSmall: {
        color: "white",
        marginVertical: 2,
        textTransform: "capitalize",
        fontSize: 18,
        alignSelf: "center"
    },
})

export default Header