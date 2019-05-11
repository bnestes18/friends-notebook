import React from 'react';
import './Item.css'
import Friend from './Friend.js'

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {friends: [
            {name: 'Ava', phone: '555-555-1234', address: '123 Anywhere St'},
            {name: 'Kayla', phone: '555-555-6789', address: '456 Somewhere St'},
            {name: 'Aj', phone: '123-456-1789', address: '789 Everywhere St'},
            {name: 'Palmer', phone: '999-888-7777', address: '987 Nowhere St'}
        ]}
    }
    render() {
        const friendsHTML = this.state.friends.map(friend => 
            <Friend key={friend.name} name={friend.name} phone={friend.phone} address={friend.address}/>
        )
        const addFriend = () => {
            const name = document.getElementById('name').value
            const phone = document.getElementById('phone').value
            const address = document.getElementById('address').value
            const newFriend = {
                name,
                phone,
                address
            }
            this.setState({friends: [...this.state.friends, newFriend]})
        }
        return (
            <div id="friends-body">{friendsHTML}

                <div>
                    <form id="form-body"><label>Add a Friend: </label>
                        <input id="name" type="text" name="friend" placeholder="Name"/>
                        <input id="phone" type="text" name="phone" placeholder="Phone"/>
                        <input id="address" type="text" name="address" placeholder="Address"/>
                        <button onClick={addFriend} id="add-button" type="button" name="button">Add</button>
                    </form>
                </div>   
            </div>
        )
    }
}

export default Friends;