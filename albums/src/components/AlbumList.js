import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  // Executed before the component is rendered
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    if (this.state.albums) {
      return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
      );
    }
    return <Text style={styles.textStyle}>No data available</Text>;
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  // viewStyle: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'relative',
  // },
  textStyle: {
    fontSize: 20,
  }
};

export default AlbumList;
