import React, { PureComponent } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, Checkbox, TablePagination, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    tableCell: {
        borderColor: theme.palette.primary.main
    }
})

class WTable extends PureComponent {
    state = {
        rowsPerPage: 5,
        page: 0
    }

    render() {
        const { data, classes } = this.props;
        const { rowsPerPage, page } = this.state;

        return (
            <>
                <Table>
                    <TableHead>
                        <TableCell className={classes.tableCell}>Title</TableCell>
                        <TableCell className={classes.tableCell} />
                    </TableHead>
                    <TableBody>
                        {
                            data.slice(rowsPerPage * page, rowsPerPage * page + rowsPerPage).map(item =>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>{item.title}</TableCell>
                                    <TableCell className={classes.tableCell}><Checkbox color="primary" /></TableCell>
                                </TableRow>)
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={(_, page) => this.setState({ page })}
                />
            </>
        )
    }
}

export default withStyles(styles)(WTable)