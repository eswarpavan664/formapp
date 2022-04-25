import logo from './logo.svg';
import './App.css';

function App() {
  //Sample address: http://localhost:3000/?id=55&name=test
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');
const name = queryParams.get('name');
const type = queryParams.get('type');

console.log(id, name, type); // 55 test null

  return (
    <div style={{backgroundColor:'green'}}>

<div style={{backgroundColor:'pink',marginLeft:'10%',marginRight:'10%',borderRadius:10,borderColor:'black',borderStyle:'groove'}}>
     <h1 style={{textAlign:'center'}}>Feedback Form</h1>
     <h3 style={{textAlign:'center'}}>from {name}</h3>
<form  style={{width:"70%",marginLeft:'15%',}}>
  <div class="form-group">
    <label for="formGroupExampleInput">1)around interest in the beginning by relation to previous learning,throwing a new idea,questioning, etc </label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">2)Specified the Objectives of presentation</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">3)Organized material in a logical sequence</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">4)Used relevant content matter</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">5)Changed the pace of presentation by shifting emphasis, jokes, etc</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">6)Used specific examples to illustrate main idea</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">7)Used non verbal cues eye contact, etc </label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  
  <div class="form-group">
    <label for="formGroupExampleInput2">8)allowed questions from students</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">9)Asked questions</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">10)Solicited/Raised questions </label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>


  <div class="form-group">
    <label for="formGroupExampleInput2">11)Rewarded pupil questions</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">12)Used proper Av aids</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">14)Used the aids effectively</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>


  <div class="form-group">
    <label for="formGroupExampleInput2">15)Summarized most important points at the end of the session</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">16)Lesson on the whole was effective</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">17)For any Additional Comments(Optional)</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
</form>
    </div>
    </div>
  );
}

export default App;
