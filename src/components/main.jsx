import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./repositoryList.jsx";
import AppBar from "./appBar.jsx";
import { Routes, Route} from "react-router-native";

const Main = () => {
    return (
        <View style={{ flexGrow: 1}}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />}/>
                <Route path='/signin' element={<Text>Working on it</Text>}/>
            </Routes>

        </View>
    )
}

export default Main