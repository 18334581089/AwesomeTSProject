import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    let data: any = {
      toValue: 1,
      duration: 10000,
    };
    Animated.timing(fadeAnim, data).start();
  }, [fadeAnim]);
  const StyleSheet2 = StyleSheet.create({
    style1: {
      width: 250,
      height: 50,
      backgroundColor: 'powderblue',
    },
  });
  return (
    <Animated.View style={StyleSheet2.style1}>{props.children}</Animated.View>
  );
};

export default () => {
  return (
    <View style={StyleSheet1.style1}>
      <FadeInView>
        <Text style={StyleSheet1.style3}>Fading in</Text>
      </FadeInView>
    </View>
  );
};

const StyleSheet1 = StyleSheet.create({
  style1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3: {fontSize: 28, textAlign: 'center', margin: 10},
});
