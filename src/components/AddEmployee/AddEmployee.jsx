import { useState } from 'react'
import styles from './AddEmployee.module.css'

const AddEmployee = ({ onSubmit }) => {
	const [name, setName] = useState('')
	const [salary, setSalary] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		if (name && salary) {
			onSubmit(name, salary)
		}
		setName('')
		setSalary('')
	}
	return (
		<div className={styles.addEmployee}>
			<h2>Добавьте нового сотрудник</h2>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.addInput}
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Как его зовут'
				/>
				<input
					className={styles.addInput}
					type='number'
					value={salary}
					onChange={e => setSalary(e.target.value)}
					placeholder='З/П в $?'
				/>
				<button className={styles.addButton} disabled={!name || !salary}>
					Добавить
				</button>
			</form>
		</div>
	)
}

export default AddEmployee
