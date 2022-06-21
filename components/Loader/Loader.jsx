import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.gooey}>
				<span className={styles.dot}></span>
				<div className={styles.dots}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default Loader;