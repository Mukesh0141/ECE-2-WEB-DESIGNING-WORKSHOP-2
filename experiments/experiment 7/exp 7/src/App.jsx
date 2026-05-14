// import React from 'react';
// import StudentCard from './StudentCard';
// function App() {
//     return (
//         <div>
//             <h1> ECE 2 - EXP7 Student Card</h1>
//             <StudentCard name = 'Rahul' rollNo = '123' city = 'Delhi' age = '20' grade = 'A' />
//             <StudentCard name = 'Piyush' rollNo = '456' city = 'Mumbai' age = '21' grade = 'B'/>
//             <StudentCard name = 'prince' rollNo = '789' city = 'Bangalore' age = '22' grade ='A'/>    
//         </div>
//     );
// }
// export default App;

import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
function App() {
  return (
    <div>
      <Header title="📋 Student App" />
<StudentCard name="Aman" marks={92} />
      <StudentCard name="Priya" marks={78} />
      <StudentCard name="Rahul" marks={85} />
    </div>
  );
}
export default App;