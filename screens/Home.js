// import React from 'react';
// import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
// import { Card, AirbnbRating } from 'react-native-elements'

// import axios from 'axios'

// export default class Home extends React.Component{
//     constructor(){
//         super()
//         this.state={article_details:{}}
//     }
//     getArticle=()=>{
//         const {url}="http://localhost:500/getArticle"
//         axios
//         .get(url)
//         .then(response=>{
//             let details=response.data.data
//             this.setState({article_details:details})
//         })
//         .catch(error=>{console.log(error.message)})
//     }

//     likedArticle=()=>{
//         const {url}="http://localhost:5000/likedArticle"
//         axios
//         .post(url)
//         .then(response=>{this.getArticle})
//         .catch(error=>{console.log(error.message)})
//     }

//     dislikedArticle=()=>{
//         const {url}="http://localhost:5000/dislikedArticle"
//         axios
//         .post(url)
//         .then(response=>{this.getArticle})
//         .catch(error=>{console.log(error.message)})
//     }
//     componentDidMount(){
//         this.getArticle()
//     }

//     render(){
//         const {movieDetails}=this.state;
//         const {title,lang,url}=movieDetails
//         return(
//             <View >
//                 <View>
//                     <Text >{title}</Text>
//                 </View>
//             </View>
//         )
//     }
// }

import React, { Component } from "react";
import { View, Text} from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      articleDetails: {}
    };
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    const url = "http://localhost:5000/getArticle";
    axios
      .get(url)
      .then(response => {
        console.log(response.data.data)
        this.setState({ articleDetails: response.data.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  likedArticle = () => {
    const url = "http://localhost:5000/likedArticle";
    axios
      .post(url)
      .then(response => {
        this.getArticle();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  unlikedArticle = () => {
    const url = "http://localhost:5000/dislikedArticle";
    axios
      .post(url)
      .then(response => {
        this.getArticle();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    const { articleDetails } = this.state;
        const {title}=articleDetails
      return (
        <View style={{flex:1,alignItems:"left"}}>    
            <Text style={{marginTop:100,fontSize:20}}>{title}</Text>
            <TouchableOpacity onPress={()=>{this.likedArticle()}}>
              
              <Icon name="thumbs-up" size={30} style={{marginLeft:20,marginTop:20}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.unlikedArticle()}}>
              
              <Icon name="thumbs-down" size={30} style={{marginLeft:50,marginBottom:200}} />
              </TouchableOpacity>
        </View>
      );
  }
}