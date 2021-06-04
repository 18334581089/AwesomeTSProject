import React, {useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

// Animated.sequence([
//   Animated.decay(position, {
//     velocity: {x: gestureState.vx, y: gestureState.vy},
//     deceleration: 0.997,
//   }),
//   Animated.parallel([
//     Animated.spring(position, {
//       toValue: { x: 0, y: 0, },
//     }),
//     Animated.timing(twirl, {
//       toValue: 360,
//     }),
//   ]),
// ]).start();

export default () => {
  // // const [position] = useState<number>(0);
  const v = new Animated.Value(0);
  const fadeAnim = useRef(v).current;
  const gestureState: any = {
    velocity: 0.1,
  };
  // const a2: any = {
  //   toValue: {x: 1, y: 1},
  // };
  // let a3: any = {
  //   toValue: 1,
  // };
  // let a1 = new Animated.Value(0);
  React.useEffect(() => {
    // Animated.sequence([
    Animated.decay(fadeAnim, gestureState).start();
    // Animated.parallel([Animated.spring(a1, a2), Animated.timing(a1, a3)]),
    // ]).start();
  });

  const StyleSheet2 = StyleSheet.create({
    style1: {
      width: 250,
      height: 20,
      backgroundColor: 'blue',
    },
  });
  return (
    <Animated.View
      style={{
        ...StyleSheet2.style1,
        opacity: fadeAnim,
      }}>
      <Text>123</Text>
    </Animated.View>
  );
};
