import React from 'react'

// ESTILOS
import styles from "../styles/Login.module.css"

function Login() {
	return (
		<div className={styles.container}>
			<div className={styles.screen}>
				<div className={styles['screen__content']}>
					<form className={styles.login}>
						<div className={styles['login__field']}>
							<i className={`${styles['login__icon']} ${styles['fas fa-user']}`}></i>
							<input type="text" className={styles['login__input']} placeholder="User name / Email" />
						</div>
						<div className={styles['login__field']}>
							<i className={`${styles['login__icon fas']} ${styles['fa-lock']}`}></i>
							<input type="password" className={styles['login__input']} placeholder="Password" />
						</div>
						<button className={`${styles.button} ${styles['login__submit']}`}>
							<span className={styles['button__text']}>Log In Now</span>
							<i className={`${styles['button__icon']} ${styles['fas fa-chevron-right']}`}></i>
						</button>
					</form>
					<div className={styles['social-login']}>
						<h3>log in via</h3>
						<div className={styles['social-icons']}>
							<a href="#" className={`${styles['social-login__icon']} ${styles['fab fa-instagram']}`}></a>
							<a href="#" className={`${styles['social-login__icon']} ${styles['fab fa-facebook']}`}></a>
							<a href="#" className={`${styles['social-login__icon']} ${styles['fab fa-twitter']}`}></a>
						</div>
					</div>
				</div>
				<div className={styles['screen__background']}>
					<span className={`${styles['screen__background__shape']} ${styles['screen__background__shape4']}`}></span>
					<span className={`${styles['screen__background__shape']} ${styles['screen__background__shape3']}`}></span>
					<span className={`${styles['screen__background__shape']} ${styles['screen__background__shape2']}`}></span>
					<span className={`${styles['screen__background__shape']} ${styles['screen__background__shape1']}`}></span>
				</div>
			</div>
		</div>
	)
}

export default Login