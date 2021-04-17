import { faCommentAlt, faCommentDots, faHome, faListUl, faPlusSquare, faShoppingCart, faSignOutAlt, faTh, faThLarge, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-area d-flex flex-column justify-content-between py-5 px-4 bg-success" style={{height:"100vh"}}>
            <ul>
                <li>
                    <Link to='/dashboard/orderList'>
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

                <li>
                    <Link to='/book'>
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