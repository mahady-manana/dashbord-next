import React, { FC } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TreeItem from '@material-ui/lab/TreeItem';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        checkboxItem: {
            background : 'none',
            '&.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label' : {
            background: 'none',
            },
            '&.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover' : {
            background: 'none',
            },
        }
    })
)
interface TreeItemCheckboxProps {
    labelName: string,
    onChange?: Function,
    name: string,
    checked: boolean,
    nodeId: string,
    iconColor?: string,
}
export const TreeItemCheckbox: FC<TreeItemCheckboxProps> = ({
    labelName,
    onChange,
    name,
    checked,
    nodeId,
    iconColor,
}) => {
    const classes = useStyles();
    return (
        <>
            <TreeItem nodeId={nodeId} label={
                <FormControlLabel
                    control={
                        <Checkbox 
                            style={{color: iconColor}}
                            name={name} 
                            onChange={onChange(name)} 
                            checked={checked}
                        />}
                    label={labelName}
                />
                }
                className={classes.checkboxItem}
            />
        </>
    )
}