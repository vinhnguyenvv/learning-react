import { StyleSheet, Text, View } from 'react-native';
import HoweView from './src/views/HomewView';

export default function App() {
  return (
    HoweView()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

