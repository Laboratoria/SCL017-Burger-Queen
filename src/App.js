/* import logo from './logo.svg'; */
import './App.css';
import Home from './components/home/home'
import WaiterView from './components/waiterView/waiterView'
import BreakfastMenu from './components/menuOptions/breakfastMenu';
import LunchMenu from './components/menuOptions/lunchMenu';
import Order from './components/order/order';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import data from './menu.json'
import { useState } from 'react';


const App = () => {
	const menu = data;
	const [cartItems, setCartItems] = useState([])

	const onAdd = (item) => {
		const exist = cartItems.find((x) => x.id === item.id)
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...item, qty: 1 }])
		}
	};

	const onRemove = (item) =>{
		const exist = cartItems.find((x) => x.id === item.id)
		if(exist.qty === 1){
			setCartItems(
				cartItems.filter((x) =>
					x.id !== item.id
				)
			);
		}else{
			setCartItems(
				cartItems.map((x) =>
					x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);	
		}
	}

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/waiterView">
						<WaiterView />
					</Route>
					<Route exact path="/breakfastMenu">
						<WaiterView />
						<div className='menuOptionsAndOrder'>
							<BreakfastMenu onAdd={onAdd} menu={menu} />
							<Order onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
						</div>
					</Route> <Route exact path="/lunchMenu">
						<WaiterView />
						<div className='menuOptionsAndOrder'>
							<LunchMenu onAdd={onAdd} menu={menu} />
							<Order onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
						</div>
					</Route>
					{/* <Route exact path="/kitchenView">
            </Route> */}
				</Switch>
			</div>
		</Router>
	);
}




export default App;
