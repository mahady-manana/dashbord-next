import { Typography } from "@material-ui/core";
import MainHeaders from "../components/commons/MainHeaders";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<MainHeaders
				title='Next generation app - MM'
				description='Next generation for web development'
			/>
			<div></div>
			<main className={styles.main}>
				<Typography variant='h1' className={styles.title} color='primary'>
					Welcome to <a href='/about'>Next page!</a>
				</Typography>
				<Typography>Typo</Typography>
				<Typography>Typo</Typography>
			</main>
		</>
	);
}
