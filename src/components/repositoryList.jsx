import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from '../data/respositories.js';
import RepositoryItem from "./repositoryItem.jsx";

const RepositoryList = () => {
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent = {() => <Text></Text>}
            renderItem = { ({ item: repo }) => (
                <RepositoryItem { ... repo }/>
            )}
        />
    )
}

export default RepositoryList