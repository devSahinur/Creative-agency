import React from 'react';
import { useContext } from 'react';
import {Container, Card, Button} from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../../App';
import { handleSignOut, initializeLoginFramework } from '../../Login/LoginManager';

const Profile = () => {
    const {loggedInUser: {name, email, photo}, setLoggedInUser} = useContext(UserContext);
    
    
    const signOut = () => {
        initializeLoginFramework();
        handleSignOut()
            .then(res => {
                setLoggedInUser(res)
                toast.error("You've been logged out")
            })
    };
    return (
        <Container>
            <Card className='border-0 shadow'>
                <Card.Header as={'h4'} className='text-center border-0 mt-1'>Profile</Card.Header>
                <Card.Body className='card-body'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <img
                         src={photo} 
                         alt="User pic" 
                         className='rounded-circle'
                         width='150'
                         />
                        <div className='mt-3'>
                            <h4>{name}</h4>
                            <p className='text-secondary mb-1'>{email}</p>
                        </div>
                        <Button onClick={signOut} className='px-4 logout-btn btn-main'>Log Out</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;