import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import styles from "./Styles";

export default function ScrollHorizontal() {
  return (
    <SafeAreaView>
        <ScrollView horizontal>
            <View style={styles.container}>
                <View style={styles.item}>
                </View>
                <View style={styles.item2}>
                </View>
                <View style={styles.item3}>
                </View>
                <View style={styles.item4}>
                </View>
                <View style={styles.item5}>
                </View>
            </View>  
        </ScrollView>
            <View style={styles.container2}>
            </View>
    </SafeAreaView>
  )
}