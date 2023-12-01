// import React, { useState, useEffect } from 'react';
// import {
//   Button, Card, CardContent, Container, Rating,
//   Grid, Typography, ThemeProvider, createTheme,
// } from '@mui/material';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// import Box from '@mui/material/Box';
// import { Link as RouterLink } from 'react-router-dom';
// import ModalCatalogGoodsComponent from '../shop/ModalCatalogGoodsComponent';

// const defaultTheme = createTheme();

// export default function ViewGoodsOnCounter() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);
//   const [filters, setFilters] = useState({
//     category: '',
//     subcategory: '',
//     product: '',
//     minPrice: '',
//     maxPrice: '',
//   });
//   const [categories, setCategories] = useState([]);
//   const [modalState, setModalState] = useState(false);


//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];


//   useEffect(() => {
//     fetchData();
//     fetchCategories();
//   }, [filters]);

//   const fetchData = () => {
//     let url = 'http://localhost:8080/goodsinvoices';

//     if (filters.category) {
//       url += `/getByCategoriesId?id=${filters.category}`;
//     } else if (filters.subcategory) {
//       url += `/getBySubcategoriesId?id=${filters.subcategory}`;
//     } else if (filters.product) {
//       url += `/getByGoodsId?id=${filters.product}`;
//     }

//     fetch(url)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   };

//   const fetchCategories = () => {
//     fetch('http://localhost:8080/categoriesGoods')
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setCategories(result);
//         },
//         (error) => {
//           console.error('Помилка при отриманні категорій:', error);
//         }
//       );
//   };

//   const handleOpenModal = () => {
//     // Чистим фільтри перед відкриттям модального вікна
//     setFilters({
//       category: '',
//       subcategory: '',
//       product: '',
//       minPrice: '',
//       maxPrice: '',
//     });
//     setModalState(true);
//   };

//   const handleCategorySelect = (category) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       category: category.id,
//     }));
//     setModalState(false); // Закрити діалогове вікно
//   };

//   const handleSubcategorySelect = (subcategory) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       subcategory: subcategory.id,
//     }));
//     setModalState(false); // Закрити діалогове вікно
//   };

//   const handleProductSelect = (product) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       product: product.id,
//     }));
//     setModalState(false); // Закрити діалогове вікно
//   };

//   if (error) {
//     return <p>Error {error.message}</p>;
//   } else if (!isLoaded) {
//     return <p>Loading...</p>;
//   } else {
//     return (

//       <>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={handleOpenModal}
//         >
//           Каталог товарів
//         </Button>

//         <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>


//         <ThemeProvider theme={defaultTheme}>
//           <Container sx={{ py: 4, flexBasis: '1z%' }}>

//             <div>
//               <ModalCatalogGoodsComponent
//                 call={modalState}
//                 onDestroy={() => setModalState(false)}
//                 onCategorySelect={handleCategorySelect}
//                 onSubcategorySelect={handleSubcategorySelect}
//                 onProductSelect={handleProductSelect}
//               />
//             </div>
//           </Container>
//           <main style={{ display: 'flex' }}>
//             <Container sx={{ py: 4, flexBasis: '75%' }}>
//               <Grid container spacing={4}>
//                 {items.map((item) => (
//                   <Grid item key={item.id} xs={12} sm={6} md={4}>
//                     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                       <RouterLink to={`/good/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                         <div
//                           style={{
//                             paddingTop: '75%',
//                             backgroundImage: `url(${item.goods.photosGoodsDTOS && item.goods.photosGoodsDTOS.length > 0 ? item.goods.photosGoodsDTOS[0].path : 'https://source.unsplash.com/random?wallpapers'})`,
//                             backgroundSize: 'contain',
//                             backgroundRepeat: 'no-repeat',
//                             backgroundPosition: 'center',
//                           }}
//                         />
//                         <CardContent sx={{ flexGrow: 1 }}>
//                           <Typography gutterBottom variant="h5" component="h2">
//                             {item.goods.name}
//                           </Typography>
//                           <Typography>
//                             <Rating readOnly value={item.evaluation ?? 0} />
//                           </Typography>
//                           <Typography>{item.goods.short_discription}</Typography>
//                         </CardContent>
//                         <CardContent>
//                           <Typography gutterBottom variant="h4" component="h1">
//                             {item.price} ₴
//                             <h5 >{item.quantity < 1 ? "Товар відсутній" : "Є в наявності"}</h5>
//                           </Typography>
//                         </CardContent>
//                       </RouterLink>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Container>
//           </main>
//           <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//             {/* Ваш футер */}
//           </Box>
//         </ThemeProvider>


//       </>
//     );
//   }
// }


import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, Typography } from '@mui/material';

import ModalCatalogGoodsComponent from '../shop/ModalCatalogGoodsComponent';


// function createData(id, name, calories, fat, carbs, protein) {
//   return {
//     id,
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
//   createData(2, 'Donut', 452, 25.0, 51, 4.9),
//   createData(3, 'Eclair', 262, 16.0, 24, 6.0),
//   createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
//   createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
//   createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
//   createData(9, 'KitKat', 518, 26.0, 65, 7.0),
//   createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
//   createData(11, 'Marshmallow', 318, 0, 81, 2.0),
//   createData(12, 'Nougat', 360, 19.0, 9, 37.0),
//   createData(13, 'Oreo', 437, 18.0, 63, 4.0),
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ViewGoodsOnCounter() {



  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [filters, setFilters] = useState({
    category: '',
    subcategory: '',
    product: '',
    minPrice: '',
    maxPrice: '',
  });
  const [categories, setCategories] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(); // Викликаємо при завантаженні компонента
  }, [filters]); 

  const fetchData = () => {
    let url = 'http://localhost:8080/goodsinvoices';

    if (filters.category) {
      url += `/getByCategoriesId?id=${filters.category}`;
    } else if (filters.subcategory) {
      url += `/getBySubcategoriesId?id=${filters.subcategory}`;
    } else if (filters.product) {
      url += `/getByGoodsId?id=${filters.product}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRows(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  // const rows = isLoaded ? items : []; // Використовуємо отримані дані з сервера як rows


  handleOpenModal = () => {
    // Чистим фільтри перед відкриттям модального вікна
    this.setState(
      (prevState) => ({
        filters: {
          category: '',
          subcategory: '',
          product: '',
          minPrice: '',
          maxPrice: '',
        },
        modalState: true,
      }),
      () => {
        // Перевіряємо, чи видалення фільтрів відбувається перед відкриттям діалогового вікна
        console.log('Фільтри після очищення:', this.state.filters);
      }
    );
  };

  handleCategorySelect = (category) => {
    this.setState(
      (prevState) => ({
        filters: {
          ...prevState.filters,
          category: category.id,
        },
        modalState: false, // Закрити діалогове вікно
      }),
      () => {
        this.fetchData();
      }
    );
  };

  handleSubcategorySelect = (subcategory) => {
    this.setState(
      (prevState) => ({
        filters: {
          ...prevState.filters,
          subcategory: subcategory.id,
        },
        modalState: false, // Закрити діалогове вікно
      }),
      () => {
        this.fetchData();
      }
    );
  };

  handleProductSelect = (product) => {
    this.setState(
      (prevState) => ({
        filters: {
          ...prevState.filters,
          product: product.id,
        },
        modalState: false, // Закрити діалогове вікно
      }),
      () => {
        this.fetchData();
      }
    );
  };






  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (

    <>
    <Button
          variant="outlined"
          color="primary"
          onClick={handleOpenModal}
        >
          Каталог товарів
        </Button>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.goods.name}</TableCell>
                      <TableCell align="right">{row.goods.short_discription}</TableCell>
                      <TableCell align="right">{row.price} ₴</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </>
  );
}
