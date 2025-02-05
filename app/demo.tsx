import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Container } from '~/components/Container';

export default function Demo() {
  return (
    <Container>
      <View style={styles.center}>
        <Text>Demo</Text>
        <Link href="/">
          <Text>Go to Home</Text>
        </Link>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
