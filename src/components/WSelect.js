import React from 'react'
import { Select, InputLabel, withStyles, FormControl, Chip, MenuItem, RootRef } from '@material-ui/core';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    select: {
        '&:focus': {
            backgroundColor: 'transparent'
        }
    }
})

const WexerSelect = React.memo(function WexerSelect(props) {
    const { name, value, onChange, label, classes } = props;

    console.log('Rendering WexerSelect');


    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={name} className={classes.inputLabel}>{label}</InputLabel>
            <Select
                className={classes.select}
                fullWidth={true}
                multiple={true}
                onChange={onChange}
                value={value}
                disableUnderline={true}
                color="primary"
                inputProps={{
                    name: name,
                    id: name,
                    className: classes.select
                }}
                renderValue={selected => (
                    <div className={classes.chip}>
                        {selected.map(value => (
                            <Chip key={value} label={props.options.find(item => item.value === value).name} className={classes.chip} />
                        ))}
                    </div>
                )}>
                {props.options.map(item => <MenuItem value={item.value}>{item.name}</MenuItem>)}
            </Select>
        </FormControl>
    )
})

export default withStyles(styles)(WexerSelect)