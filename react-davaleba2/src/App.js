import './App.css';
import ParentComponent from './components/ParentComponent';
import Wrapper from './components/Wrapper';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div>
      <ParentComponent />
      <>
        <Wrapper>
          <NewComponent />
          <NewComponent />
          <NewComponent />
        </Wrapper>
      </>
    </div>
  );
}

export default App;
