import { faCommentAlt, faCommentDots, faHome, faListUl, faPlusSquare, faShoppingCart, faSignOutAlt, faTh, faThLarge, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://hello-plumber-server.onrender.com/isAdmin', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
        
    }, [])

    return (
        <div className="sidebar-area d-flex flex-column justify-content-between py-5 px-4 bg-success" style={{height:"100vh"}}>
            <ul>
                {isAdmin && <div>
                    <li>
                        <Link to='/orderList'>
                            <FontAwesomeIcon icon={faThList} /> <span>Order List</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/addService'>
                            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/makeAdmin'>
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/manageServices'>
                            <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>
                }

                <li>
                    <Link to='/book/:id'>
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to='/bookings'>
                        <FontAwesomeIcon icon={faThList} /> <span>BookingList</span>
                    </Link>
                </li>
                <li>
                    <Link to='/review'>
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to='/home'>
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
            </ul>
            
            <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;