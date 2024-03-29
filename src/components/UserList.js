import React ,{useContext}from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link} from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const UserList = () => {
    const {users,removeUser} = useContext(GlobalContext);
    
    return (
       <ListGroup className="mt-4">
           {users.length> 0 ? (
               <>
                 {users.map(user=>(
            <ListGroupItem className="d-flex" key={user.id}>
            <strong>{user.name}</strong>
        <div className="ml-auto">
           <Link to={`/edit/${user.id}`} className="btn btn-warning ml-1">Edit</Link>
           <Button onClick={() => removeUser(user.id)} className="btn btn-danger ml-1">Delete</Button>
       </div>
        </ListGroupItem>
           ))} 
           </>
           ):(
              <h4 className="text-center">No user</h4> 
           ) }
         
          
          

       </ListGroup>
    )
}
