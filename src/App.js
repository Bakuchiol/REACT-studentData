import { useState } from 'react';
// 
import './App.css';
import Student from './components/Student';
import studentList from './models/studentList'



function App() {

  // state
  const [studentData, setStudentData] = useState(studentList)


  return (
    <div className="App">

      {studentData.map((pupil) => {
        console.log(pupil);

        return (
          <Student 
            key={pupil.id}
            name={pupil.name}
            bio={pupil.bio}
            // scores={pupil.scores}
            scores={pupil.scores.map((pupil) => {
              return (
                <>
                <li key={pupil.id}>{pupil.date}</li>
                <li key={pupil.id}>{pupil.score}</li>
                </>
              )
            })}

      />
        )
      })}
      
    </div>
  );
}

export default App;
