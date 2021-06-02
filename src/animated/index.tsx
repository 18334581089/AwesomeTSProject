import React, {useRef} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';

const FadeInView = (props: any) => {
  const v = new Animated.Value(0.2);
  const fadeAnim = useRef(v).current;
  React.useEffect(() => {
    let data: any = {
      toValue: 1,
      duration: 1000,
      easing: Easing.back(0.2),
      usenativedriver: true, // 不设置会报错
    };
    Animated.timing(fadeAnim, data).start();
  }, [fadeAnim]);
  const StyleSheet2 = StyleSheet.create({
    style1: {
      width: 250,
      height: 50,
      backgroundColor: 'red',
      // fontSize: fadeAnim,
    },
  });
  return (
    <Animated.View
      style={{
        ...StyleSheet2.style1,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
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
