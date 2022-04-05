import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [userData,SetUserData] = useState([]);

  const addUserData = (newName, newAge) =>{
    SetUserData((currState)=>{
      return([...currState,{name:newName,age:newAge}])
    });
  }

  return (
    <div>
      <AddUser updateUserData={addUserData}></AddUser>
      <UsersList users={userData}></UsersList>
    </div>
  );
}

export default App;
