import React, { useState } from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import name from './fake.json'
//import './index.css';

const App = () => {
    const usersData = name
  // { id: 1, name: 'Bharati', username: 'Bharati Namana' },

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  
  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
    //console.log(user.id)
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  
  return (
    <div className="container">
      <h1 id="head">CRUD APP</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2 id="editusers">Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                 updateUser={updateUser}
              />
            </div>
           ) : (
           <div>
          <h2 id="addusers">Add users</h2>
            <AddUserForm addUser={addUser} />
        </div>
        )}
      </div>
        <div className="flex-large">
          <h2 id="viewusers">View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )
}
export default App