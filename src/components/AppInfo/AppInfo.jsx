import styles from './AppInfo.module.css'

const AppInfo = ({ numberEmployees, increased }) => (
	<div className={styles.appInfo}>
		<h1>Учет сотрудников в компании</h1>
		<h2>Общее число сотрудников: {numberEmployees} </h2>
		<h2>Премию получать: {increased} </h2>
	</div>
)

export default AppInfo
