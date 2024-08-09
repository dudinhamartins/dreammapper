import React from 'react';
import {SafeAreaView, ScrollView, Input} from 'react-native';
import {Card, Button, Text} from '@rneui/themed';
import styles from "./Styles";

export default function Scroll() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input placeholder="BASIC INPUT" />
         <Input placeholder="Password" secureTextEntry={true} />
      </ScrollView>
    </SafeAreaView>
  );
}
