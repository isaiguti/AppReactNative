import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./repositoryList.jsx";
import AppBar from "./appBar";
import { Routes, Route} from "react-router-native";
import LogInPage from "../pages/logIn.jsx";

const Main = () => {
    return (
        <View style={{ flexGrow: 1}}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />}/>
                <Route path='/signin' element={<LogInPage />}/>
            </Routes>

        </View>
    )
}

export default Main