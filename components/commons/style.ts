import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuList: {
			display: "inline-block",
			marginRight: "30px",
		},
		classesTest: {
			color: theme.palette.primary.main,
		},
	}),
);
