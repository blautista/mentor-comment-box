import "./App.css";
import data from "./data.json";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <div className="App">
      <CommentSection currentUser={data.currentUser} comments={data.comments} />
      <footer
        style={{
          borderTop: "1px solid lightgray",
          width: "100%",
          background: "white",
          padding: "24px 0px 24px 0px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        Interactive Comments Section challenge from FrontendMentor. Made with
        React. Source code:
        <a href="https://github.com/blautista/mentor-comment-box" title="link">
          https://github.com/blautista/mentor-comment-box
        </a>
      </footer>
    </div>
  );
}

export default App;
