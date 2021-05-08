import Head from "next/head";
import { FC } from "react";

interface HeadProps {
	title?: string;
	description?: string;
}
export const HeadTags: FC<HeadProps> = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content={description} />
			</Head>
			{children}
		</>
	);
};
