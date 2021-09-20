import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { Card, AirbnbRating } from 'react-native-elements'

import axios from 'axios'

export default class Home extends React.Component{
    constructor(){
        super()
        this.state={article_details:{}}
    }
    getArticle=()=>{
        const {url}="http://localhost:500/getArticle"
        axios
        .get(url)
        .then(response=>{
            let details=response.data.data
            this.setState({article_details:details})
        })
        .catch(error=>{console.log(error.message)})
    }

    likedArticle=()=>{
        const {url}="http://localhost:5000/likedArticle"
        axios
        .post(url)
        .then(response=>{this.getArticle})
        .catch(error=>{console.log(error.message)})
    }

    dislikedArticle=()=>{
        const {url}="http://localhost:5000/dislikedArticle"
        axios
        .post(url)
        .then(response=>{this.getArticle})
        .catch(error=>{console.log(error.message)})
    }
    componentDidMount(){
        this.getArticle()
    }

    render(){
        const {movieDetails}=this.state;
        const {title,lang,url}=movieDetails
        return(
            <View >
                <View>
                    <Text >{title}</Text>
                </View>
            </View>
        )
    }
}