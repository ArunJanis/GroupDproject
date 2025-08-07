import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

import { useContext } from 'react';
import UserContext from '../UserContext';

function loginscreen() {
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();
	let currentUser = null;



	const register = () => {

		const u = document.getElementById('username').value;
		const p = document.getElementById('password').value;
		if (!u || !p) return alert('Enter username and password');
		localStorage.setItem(`user-${u}`, p);
		alert(`Welcome new user ${u}!`);
		setUser({ name: u });
		console.log(login.name);
		navigate('/');
	};

	const login = () => {

		const u = document.getElementById('username').value;
		const p = document.getElementById('password').value;
		const savedPass = localStorage.getItem(`user-${u}`);

		const login = () => {
			setUser({ name: u });
		};
		console.log(login.name);

		if (savedPass === p) {
			currentUser = u;
			document.getElementById('status').textContent = `Logged in as ${u}`;
			setUser({ name: u });
			//loadCart();
		} else {
			alert('Wrong Password/User');
		}
	};

    return (
    <>

    	<div className='loginContainer'>
    		<div className='loginBox'>
			<h2>Login / Register</h2>
			<input id="username" placeholder="Username" />
			<input id="password" type="password" placeholder="Password" />
			<div className='lrButtons'>
				<button onClick={register}>Register</button>
				<button onClick={login}>Login</button>
			</div>
			<p id="status"></p>
		</div>
	</div>
    </>
    );
}


export default loginscreen;
