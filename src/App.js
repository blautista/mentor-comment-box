import './App.css';
import data from './data.json';
import CommentSection from './components/CommentSection';

function App() {
  return (
    <div className="App">
      <CommentSection currentUser={data.currentUser} comments={data.comments}/>
    </div>
  );
}

export default App;
