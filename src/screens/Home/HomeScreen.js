import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';

const HomeScreen = () => {
  const initialData = [
    { id: '1', title: 'Movie 1', imageUrl: 'data:image/jpeg;base64,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' },
    { id: '2', title: 'Movie 2', imageUrl: 'data:image/jpeg;base64,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' },
    // Add more content data
  ];




  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    const filteredData = initialData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
    setSearchQuery(query);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.sectionTitle}>Recommended Movies</Text> */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 150,
    height: 200,
    borderRadius: 8,
  },
  itemTitle: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
