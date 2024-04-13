import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import AddEmployee from './components/AddEmployee/AddEmployee'
import AppFilter from './components/AppFilter/AppFilter'
import AppInfo from './components/AppInfo/AppInfo'
import EmployeesList from './components/EmployeesList/EmployeesList'

function App() {
	const data = [
		{ name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
		{ name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
		{ name: 'Carl W.', salary: 5000, increase: false, rise: true, id: 3 },
	]
	const [items, setItems] = useState(data)
	const [activeFilter, setActiveFilter] = useState('all')

	const addItemHandler = (name, salary) => {
		const newItem = { name, salary, increase: false, rise: false, id: uuidv4() }
		setItems([...items, newItem])
	}
	const onToggleIncrease = id => {
		setItems(
			items.map(item => {
				if (item.id === id) {
					return { ...item, increase: !item.increase }
				}
				return item
			})
		)
	}
	const onToggleRise = id => {
		setItems(
			items.map(item => {
				if (item.id === id) {
					return { ...item, rise: !item.rise }
				}
				return item
			})
		)
	}
	const deleteItemHandler = id => {
		setItems(items.filter(item => item.id !== id))
	}
	const searchHandler = searchValue => {
		if (searchValue.length === 0) {
			setItems(data)
		} else {
			const filteredItems = items.filter(
				item => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
			)
			setItems(filteredItems)
		}
	}
	const filterPost = (searchValue, filter) => {
		let filteredItems = data
		if (searchValue) {
			filteredItems = filteredItems.filter(item =>
				item.name.toLowerCase().includes(searchValue.toLowerCase())
			)
		}
		switch (filter) {
			case 'rise':
				filteredItems = filteredItems.filter(item => item.rise)
				break
			case 'moreThan1000':
				filteredItems = filteredItems.filter(item => item.salary > 1000)
				break
			default:
				break
		}

		setItems(filteredItems)
	}

	const employeesNumber = items.length
	const increased = items.filter(item => item.increase).length
	return (
		<div className='app'>
			<header className='header block'>
				<AppInfo numberEmployees={employeesNumber} increased={increased} />
			</header>
			<main className='main'>
				<div className='block top-block'>
					<AppFilter
						onFilter={filterPost}
						filter={activeFilter}
						onSearch={searchHandler}
						setActiveFilter={setActiveFilter}
					/>
				</div>
				<div className=' bottom-block'>
					<EmployeesList
						onToggleIncrease={onToggleIncrease}
						onToggleRise={onToggleRise}
						onDelete={deleteItemHandler}
						items={items}
					/>
				</div>
			</main>
			<footer className='footer block'>
				<AddEmployee onSubmit={addItemHandler} />
			</footer>
		</div>
	)
}

export default App
