import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = 'AIzaSyBLMXWhNnB7y8pHTXZcnpD2uZU0gyzZDso';

class App extends React.Component{
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('nature');
    }

    onTermSubmit = async (term)=> {
      const videos =  await youtube.get('/search',{
          params: {
              q: term,
              part: "snippet",
              maxResults: 5,
              type: 'video',
              key: `${KEY}`,
          }
      });
      this.setState({
          videos: videos.data.items,
          selectedVideo: videos.data.items[0]
      });
    };

    onVideoSelect = (video)=>{
        this.setState({selectedVideo: video});
    };

    render() {
        return <div className={"ui container" }>
            <SearchBar onTermSubmit={this.onTermSubmit}/>
            <div className={"ui grid"}>
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>
    };
}

export default App;