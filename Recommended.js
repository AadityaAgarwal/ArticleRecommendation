import React from 'react';
import { View} from 'react-native'
import { Card} from 'react-native-elements'
import axios from 'axios'

export default class Recommended extends React.Component{
    constructor() {
        super()
        this.state = {
            popular_data: [],
            recommended_data: [],
        }
    }
    componentDidMount() {
        this.get_popular_data()
        this.get_recommended_data()
    }

    get_popular_data = () => {
        const url = "http://localhost:5000/popularArticles"
        axios
            .get(url)
            .then(async response => { this.setState({ popular_data: response.data.data }) })
            .catch(error => { console.log(error.message) })
    }
    get_recommended_data = () => {
        const url = "http://localhost:5000/recommendedArticles"
        axios
            .get(url)
            .then(async response => { this.setState({ recommended_data: response.data.data }) })
            .catch(error => { console.log(error.message) })
    }
    render_popular = ({ item, index }) => {
        return (
            <Card key={`card-${index}`}
                image={uri = item.poster_link}
                imagePops={{ resizeMode: 'cover' }}
                featuredTitle={item.title}
                featuredSubtitle={`visit the article at ${item.url}`}
            />

        )
    }
    render_recommended=({item,index})=>{
        return(
            <Card key={`card-${index}`}
            image={uri=item.poster_link}
            imagePops={{resizeMode:'cover'}}
            featuredTitle={item.title}
            featuredSubtitle={`visit the article at ${item.url}`}
            />
        )
    }

    render() {

        return (
            <View>
                <View>
                    <FlatList
                        horizontal
                        data={this.state.popular_data}
                        keyExtractor={(item, index) => { index.toString() }}
                        renderItem={this.render_popular}
                    />
                </View>
                <View>
                    <FlatList
                        horizontal
                        data={this.state.recommended_data}
                        keyExtractor={(item, index) => { index.toString() }}
                        renderItem={this.render_recommended}
                    />
                </View>
            </View>

        )
    }
}