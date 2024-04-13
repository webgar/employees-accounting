import EmployeeItem from '../EmployeeItem/EmployeeItem'
import styles from './EmployeesList.module.css'

const EmployeesList = ({
	items,
	allItems,
	onDelete,
	onToggleIncrease,
	onToggleRise,
}) => (
	<div className={styles.employeesBlock}>
		<ul className={styles.employeesList}>
			{!items.length && <h2>Список сотрудников пустой</h2>}
			{items.map(item => {
				return (
					<EmployeeItem
						key={item.id}
						onToggleIncrease={onToggleIncrease}
						onToggleRise={onToggleRise}
						onDelete={onDelete}
						{...item}
					/>
				)
			})}
		</ul>
	</div>
)

export default EmployeesList
