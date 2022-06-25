
import './App.css';
import Typed from 'react-typed';
import Slider from './cmponents/Slider';
function App() {
  return (
    <><Slider/>
    <Typed
        strings={[
          'Search for products',
          'are u a fool',
          'Search for brands']}
        typeSpeed={20}
        backSpeed={50}
        loop >
      </Typed></>
  );
}

export default App;
