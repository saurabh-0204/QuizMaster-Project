import React, { useState, useEffect } from 'react';

export default function ManageAccount() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllUsers")
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched users:", data); 
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Accounts</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Activate</th>
            <th scope="col">Deactivate</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            console.log("User status:", user.status); 
            return (
              <tr key={user.uid}>
                <td>{user.uid}</td>
                <td>{user.uname}</td>
                <td>{user.pwd}</td>
                <td>
                  {user.role_id.role_id === 1 && <span >Admin</span>}
                  {user.role_id.role_id === 2 && <span >Student</span>}
                  {user.role_id.role_id === 3 && <span >Subscribed Student</span>}
                  {user.role_id.role_id === 4 && <span >Expert</span>}
                </td>
                <td>
                  {user.status ? "1" : "0"}
                </td>
                <td>
                  {user.status ? (
                    <button className="btn btn-success ml-2" disabled>Activate</button>
                  ) : (
                    <button className="btn btn-success ml-2" >Activate</button>
                  )}
                </td>
                <td>
                  {user.status ? (
                    <button className="btn btn-danger ml-2">Deactivate</button>
                  ) : (
                    <button className="btn btn-danger ml-2" disabled>Deactivate</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
