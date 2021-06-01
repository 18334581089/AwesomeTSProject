/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  LogBox,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Animated1 from './src/animated';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  // @refresh reset
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const icon = require('./myIcon.jpg');

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('update');
  LogBox.ignoreLogs(['warning: update']);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {/* <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">5/20,我的第一react native 项目成了</Section>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View> */}
        <View>
          <Image source={icon} style={imgStyle.img} />
        </View>
        <View>
          <Button
            onPress={() => {
              Alert.alert('你点了按钮!');
            }}
            title="点我！"
            color="#841584"
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              Alert.alert('You long-pressed the button1!');
            }}
            underlayColor="white">
            <Text>TouchableHighlight</Text>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('You long-pressed the button2!');
            }}>
            <Text>TouchableOpacity</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert('You long-pressed the button3!');
            }}>
            <Text>TouchableWithoutFeedback</Text>
          </TouchableWithoutFeedback>
        </View>
        <Animated1 />
      </ScrollView>
    </SafeAreaView>
  );
};
const imgStyle = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
});

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
