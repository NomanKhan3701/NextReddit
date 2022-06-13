import React from 'react'
import styles from './Topbar.module.scss'

const Topbar = () => {
	return (
		<div className={styles.topbar}>
			<div className={styles.logo}>
				<span>Reddit</span>
				<span>Image</span>
			</div>
		</div>
	)
}

export default Topbar