import { BsAward, BsAwardFill, BsFillStarFill } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import styles from './EmployeeItem.module.css'

const EmployeeItem = ({
	name,
	salary,
	increase,
	onToggleIncrease,
	onToggleRise,
	rise,
	id,
	onDelete,
}) => {
	return (
		<li
			className={
				increase
					? `${styles.employeesItem} ${styles.increase}`
					: styles.employeesItem
			}
		>
			<span className={styles.employeesInfo} onClick={() => onToggleRise(id)}>
				{name}
			</span>
			<span className={styles.employeesSalary}>{salary + '$'}</span>
			<button
				onClick={() => onToggleIncrease(id)}
				className={styles.awardButton}
			>
				{increase ? (
					<BsAwardFill className={styles.awardFillIcon} />
				) : (
					<BsAward className={styles.awardIcon} />
				)}
			</button>
			<button onClick={() => onDelete(id)} className={styles.deleteButton}>
				<RiDeleteBin6Line className={styles.deleteIcon} />
			</button>
			<span>
				<BsFillStarFill
					className={`${styles.starIcon} ${rise ? styles.like : ''}`}
				/>
			</span>
		</li>
	)
}

export default EmployeeItem
