import MultiLevelItemRating from "./components/MultiLevelItemRating";
import { topics } from "./components/Items";

function App() {
  return (
    <div className='App'>
      <MultiLevelItemRating topics={topics} />
    </div>
  );
}

export default App;
