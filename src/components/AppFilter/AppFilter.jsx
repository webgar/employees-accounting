import { useState } from 'react'
import styles from './AppFilter.module.css'

const AppFilter = ({ onSearch, onFilter, filter, setActiveFilter }) => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearchChange = e => {
		const value = e.target.value
		setSearchQuery(value)
		onSearch(value)
	}
	const handleFilterChange = newFilter => {
		setActiveFilter(newFilter)
		onFilter(searchQuery, newFilter)
	}
	const buttonsData = [
		{
			name: 'all',
			text: 'Все сотрудники',
		},
		{
			name: 'rise',
			text: 'На повышение',
		},
		{
			name: 'moreThan1000',
			text: 'З/П больше 1000$',
		},
	]
	const buttons = buttonsData.map(({ name, text }) => {
		const clazz =
			filter === name ? `${styles.btn} ${styles.btnActive}` : styles.btn
		return (
			<button
				onClick={() => handleFilterChange(name)}
				type='button'
				key={name}
				className={clazz}
			>
				{text}
			</button>
		)
	})

	return (
		<>
			<div className={styles.appFilter}>
				<div className={styles.filterBlock}>
					<input
						className={styles.filterInput}
						type='text'
						value={searchQuery}
						placeholder='Найти сотрудника'
						onChange={handleSearchChange}
					/>
				</div>
				<div className={styles.filterButtons}>
					{buttons}

					{/* <button
						className={`${styles.btn} ${
							activeFilter === '' ? styles.btnActiv : ''
						}`}
						onClick={() => handleFilterChange('')}
						type='button'
					>
						Все сотрудники
					</button>
					<button
						className={`${styles.btn} ${
							activeFilter === 'rise' ? styles.btnActiv : ''
						}`}
						onClick={() => handleFilterChange('rise')}
						type='button'
					>
						На повышение
					</button>
					<button
						className={`${styles.btn} ${
							activeFilter === 'moreThan1000' ? styles.btnActiv : ''
						}`}
						onClick={() => handleFilterChange('moreThan1000')}
						type='button'
					>
						З/П больше 1000$
					</button> */}
				</div>
			</div>
		</>
	)
}

export default AppFilter
