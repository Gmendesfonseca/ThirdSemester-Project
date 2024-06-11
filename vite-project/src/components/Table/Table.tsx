import React from 'react';
// import {
//   PaletteMode,
//   ThemeProvider,
//   createTheme,
//   useMediaQuery,
// } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EnhancedTableToolbar } from './EnchancedTableToolbar';
import { EnhancedTableHead } from './EnchancedTableHead';
import { BranchListType } from '../../services/branch/types';
import { StudentListType } from '../../services/student/types';
import { ProfessorListType } from '../../services/professor/types';
import { CourseListType } from '../../services/courses';
import { FriendsListType } from '../../services/friends';

export type CombinedType =
  | BranchListType
  | StudentListType
  | ProfessorListType
  | CourseListType
  | FriendsListType;

interface Identifiable {
  id: number;
}

interface InTableProps<T> {
  title: string;
  name: string;
  rowsItems: T[];
  headCells: readonly HeadCell<T>[];
}

export interface HeadCell<T> {
  id: keyof T;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}

function createData<T extends object>(data: T): T {
  return data;
}

export function InTable<T extends Identifiable>(props: InTableProps<T>) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof T>('id');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = props.rowsItems.map((row) => createData(row));

  type Order = 'asc' | 'desc';

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<T>(
    array: readonly T[] = [],
    comparator: (a: T, b: T) => number,
  ) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof T,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (rows?.length || 0)) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, rows, getComparator],
  );

  // //THEME
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  // const [mode] = React.useState<PaletteMode>(
  //   prefersDarkMode ? 'dark' : 'light',
  // );
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });

  return (
    <Paper sx={{ mb: 2, width: '85%' }}>
      <EnhancedTableToolbar title={props.title} name={props.name} />
      <TableContainer sx={{ width: '100%' }}>
        <Table
          sx={{
            minWidth: 750,
            overflow: 'auto',
            position: 'relative',
            width: '100%',
          }}
          aria-labelledby="tableTitle"
          size={'medium'}
        >
          <EnhancedTableHead
            headCells={props.headCells}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows?.length || 0}
          />
          <TableBody>
            {visibleRows.map((row) => {
              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, Number(row.id))}
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  sx={{ cursor: 'pointer' }}
                >
                  {Object.keys(row).map((key, index) => {
                    const cellValue = row[key];
                    if (
                      React.isValidElement(cellValue) ||
                      typeof cellValue === 'string' ||
                      typeof cellValue === 'number'
                    ) {
                      return <TableCell key={index}>{cellValue}</TableCell>;
                    }
                    return null;
                  })}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
