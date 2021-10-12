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


const App = () => {
	const menu = data;
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
							<BreakfastMenu menu={menu} />
							<Order />
						</div>
					</Route> <Route exact path="/lunchMenu">
						<WaiterView />
						<div className='menuOptionsAndOrder'>
							<LunchMenu menu={menu} />
							<Order />
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
