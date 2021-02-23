// component
import Animal from './Animal'
import Human from './Human'

function App() {
  return (
    <div>
      <h1>Titles</h1>
      <Animal mammal="dog" name="Rocco" />
      <Animal mammal="cat" name="Garfield" />
      <Human name="Andrew" location="Long Beach, CA" />
      
    </div>
  );
}

export default App;
