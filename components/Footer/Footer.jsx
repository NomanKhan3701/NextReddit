import React from 'react'
import styles from './Footer.module.scss'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import Link from 'next/link'

const Footer = () => {
	return (
		<div className={styles.footer}>

			<div className={styles.icons}>
				<Link href="https://github.com/NomanKhan3701">
					<a target="_blank"><AiFillGithub /></a>
				</Link>
				<Link href="https://www.linkedin.com/in/noman-khan-0450b5203">
					<a target="_blank"><AiFillLinkedin /></a>
				</Link>
			</div>
			<div className={styles.developer}>
				© 2022 noman.khan3701@gmail.com
			</div>
		</div>
	)
}

export default Footer