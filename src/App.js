import './App.css';
import TweetContainer from './components/TweetContainer';

// Mock Tweet Messagess

const mockTweets = [
  {
    id: "0",
    tweetMessage: "Dogecoin is the people's crypto"
  },
  {
    id: "1",
    tweetMessage: "Elon is my dad"
  },
  {
    id: "2",
    tweetMessage: "Learn to code just to be replaced by ChatGPT :)" 
  }
]

function App() {
  return (
  <div className='app'>
    <div className='tweet-panel'>
      {mockTweets && mockTweets.map(tweet => (<TweetContainer idKey={tweet.id} tweetMessage={tweet.tweetMessage}/>)) }
    </div>
  </div>
    )
}

export default App;
