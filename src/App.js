import './App.css';
import TweetContainer from './components/TweetContainer';

// Mock Tweet Messagess

const mockTweets = [{
    tweetMessage: "Dogecoin is the people's crypto"
  }
]

function App() {
  return (
  <div className='app'>
    <div className='tweet-panel'>
      {mockTweets && mockTweets.map(tweet => (<TweetContainer key={"key"} tweetMessage={tweet.tweetMessage}/>)) }
    </div>
  </div>
    )
}

export default App;
