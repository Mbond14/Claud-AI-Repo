import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddRecipeScreen() {
  return (
    <LinearGradient
      colors={['#FF6B6B', '#FF8E53', '#FFE0D9']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.emoji}>👨‍🍳</Text>
        <Text style={styles.title}>Add Recipe</Text>
        <Text style={styles.subtitle}>Coming in Step 2</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            This screen will allow you to:
          </Text>
          <Text style={styles.bulletPoint}>• Enter recipe name</Text>
          <Text style={styles.bulletPoint}>• Add ingredients</Text>
          <Text style={styles.bulletPoint}>• Write cooking instructions</Text>
          <Text style={styles.bulletPoint}>• Save to local storage</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  infoText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 16,
  },
  bulletPoint: {
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 22,
  },
});
