// // import React, { useState, useEffect } from 'react';
// // import {
// //   Button, Grid,
// //   Card, Select, TextField,
// //   CardContent, DialogActions,
// //   Modal, FormControl, InputLabel
// // } from "@mui/material";

// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';

// // // const [subcategoriesGoods, setSubcategoriesGoods] = useState([]);
// // // const [selectedSubcategory, setSelectedSubcategory] = useState(''); // Для обраної підкатегорії

// // const ShoppingCartModal = ({
// //   appointShoppingCartModalOpen, setAppointShoppingCartModalOpen,
// //   customerId,
// //   editedShoppingCart, setEditedShoppingCart, goodName,
// //   handleSaveShoppingCart// Отримуємо функцію з пропс
// // }) => {

// //   const [cartOfGoods, setCartOfGoods] = useState([]);
// //   const [editedValues, setEditedValues] = useState({});

// //   // const [subcategoryId, setSubcategoryId] = useState('');

// //   // useEffect(() => {
// //   //   fetch(`http://localhost:8080/goodsOrders/getCartByCustomerId?id=${customerId}`)
// //   //     .then(response => response.json())
// //   //     .then(data => setCartOfGoods(data))
// //   //     .catch(error => console.log(error));
// //   // }, []);

// //   useEffect(() => {
// //     fetch(`http://localhost:8080/goodsOrders/getCartByCustomerId?id=${customerId}`)
// //       .then(response => response.json())
// //       .then(data => {
// //         setCartOfGoods(data);
// //         // Створюємо об'єкт початкових значень для кожного товару
// //         const initialEditedValues = {};
// //         data.forEach(cartOfGood => {
// //           initialEditedValues[cartOfGood.id] = Math.max(1, cartOfGood.quantity);
// //         });
// //         setEditedValues(initialEditedValues);
// //       })
// //       .catch(error => console.log(error));
// //   }, [customerId]);

// //   // const deleteCartItem = (cartItemId) => {
// //   //   console.log('cartItemId: ' + cartItemId)
// //   //   fetch(`http://localhost:8080/goodsOrders/?id=${cartItemId}`, {
// //   //     method: 'DELETE',
// //   //   })
// //   //     .then(response => {
// //   //       if (response.ok) {
// //   //         // Видалення успішне
// //   //         // Оновіть стан або зробіть необхідні дії
// //   //         console.log('Товар видалено успішно');
// //   //       } else {
// //   //         console.error('Помилка видалення товару');
// //   //       }
// //   //     })
// //   //     .catch(error => console.error('Помилка видалення товару:', error));
// //   // };

// //   const deleteCartItem = (cartItemId) => {
// //     console.log('cartItemId: ' + cartItemId)
// //     fetch(`http://localhost:8080/goodsOrders/?id=${cartItemId}`, {
// //       method: 'DELETE',
// //     })
// //       .then(response => {
// //         if (response.ok) {
// //           // Видалення успішне
// //           // Оновлення стану
// //           setCartOfGoods(prevCart => prevCart.filter(item => item.id !== cartItemId));
// //           console.log('Товар видалено успішно');
// //         } else {
// //           console.error('Помилка видалення товару');
// //         }
// //       })
// //       .catch(error => console.error('Помилка видалення товару:', error));
// //   };

// //   return <>

// //     <Modal
// //       style={{
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         zIndex: "50000",
// //       }}
// //       open={appointShoppingCartModalOpen}
// //       onClose={() => { setAppointShoppingCartModalOpen(false); }}
// //       aria-labelledby="parent-modal-title"
// //       aria-describedby="parent-modal-description"
// //     >
// //       <Card
// //         style={{
// //           minWidth: "600px",
// //           // minHeight: "600px",
// //           padding: "10px"
// //         }}
// //       >
// //         <CardContent
// //           style={{
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "15px",
// //           }}
// //         >
// //           <TableContainer component={Paper}>
// //             <Table size="small" aria-label="a dense table">
// //               <TableHead>
// //                 <TableRow>
// //                   {/* <TableCell align="left" style={{ width: '10%' }}>Фото товару</TableCell> */}
// //                   <TableCell align="left" style={{ width: 'auto' }}>Назва товару</TableCell>
// //                   <TableCell align="left" style={{ width: 'auto' }}>Ціна</TableCell>
// //                   <TableCell align="left" style={{ width: 'auto' }}>Кількість</TableCell>
// //                   <TableCell align="left" style={{ width: 'auto' }}>Разом</TableCell>
// //                 </TableRow>
// //               </TableHead>





// //               <TableBody>

// //                 {Array.isArray(cartOfGoods) ? (
// //                   cartOfGoods.map((cartOfGood) => (
// //                     <TableRow key={cartOfGood.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
// //                       {/* Комірки рядка таблиці */}
// //                       <TableCell align="left" style={{ width: '30%' }}>
// //                         <img
// //                           src={
// //                             cartOfGood.goodsGetAllDTO.photosGoodsDTOS &&
// //                               cartOfGood.goodsGetAllDTO.photosGoodsDTOS.length > 0
// //                               ? cartOfGood.goodsGetAllDTO.photosGoodsDTOS[0].path
// //                               : 'https://source.unsplash.com/random?wallpapers'
// //                           }
// //                           alt="Зображення товару"
// //                           style={{ width: '20%', height: 'auto' }}
// //                         />
// //                         {/* </TableCell>

// //                       <TableCell component="th" scope="row" > */}
// //                         <TextField
// //                           sx={{ marginLeft: '30px', marginTop: '20px',}}
// //                           value={cartOfGood.goodsGetAllDTO.name}
// //                           InputProps={{
// //                             readOnly: true,
// //                           }}
// //                         />
// //                       </TableCell>


// //                       <TableCell component="th" scope="row" >
// //                         <TextField
// //                           sx={{ marginTop: '20px', width: '120px'}}
// //                           type={'number'}
// //                           value={cartOfGood.price}
// //                           InputProps={{
// //                             readOnly: true,
// //                           }}
// //                         />

// //                       </TableCell>

// //                       <TableCell>
// //                         <TextField
// //                           sx={{ marginTop: '20px', width: '100px' }}
// //                           type={'number'}
// //                           value={Math.max(1, editedValues[cartOfGood.id])} // Обмежуємо значення більше 1
// //                           onChange={(e) => setEditedValues({ ...editedValues, [cartOfGood.id]: e.target.value })}
// //                           inputProps={{ min: 1 }}
// //                         />
// //                       </TableCell>


// //                       <TableCell>
// //                         <TextField
// //                           sx={{ marginTop: '20px', width: '120px'}}
// //                           type={'number'}
// //                           value={editedValues[cartOfGood.id] * cartOfGood.price === 0 ? cartOfGood.price : editedValues[cartOfGood.id] * cartOfGood.price}
// //                           InputProps={{
// //                             readOnly: true,
// //                           }}
// //                         />
// //                       </TableCell>

// //                       <TableCell align="left" style={{ width: '20%' }}>
// //                         <Button
// //                           variant="outlined"
// //                           size="small"
// //                           color="error"
// //                           onClick={() => {
// //                             deleteCartItem(cartOfGood.id);
// //                             // Додайте додатковий код, який вам може знадобитися після видалення
// //                           }}
// //                         >
// //                           Видалити з корзини
// //                         </Button>
// //                       </TableCell>

// //                     </TableRow>
// //                   ))
// //                 ) : (
// //                   <TableRow>
// //                     <TableCell colSpan={3}>Немає доступних товарів.</TableCell>
// //                   </TableRow>
// //                 )}

// //               </TableBody>
// //             </Table>
// //           </TableContainer>

// //         </CardContent>
// //         <DialogActions>
// //           <Button variant="outlined" color="error" onClick={() => setAppointShoppingCartModalOpen(false)}>Скасувати</Button>
// //           <Button variant="outlined" onClick={() => handleSaveShoppingCart(editedValues)}>
// //             Зберегти
// //           </Button>

// //         </DialogActions>
// //       </Card>
// //     </Modal>
// //   </>;

// // };

// // export default ShoppingCartModal



// import React, { useState, useEffect } from 'react';
// import {
//   Button, Grid, MenuItem,
//   Card, Select, TextField,
//   CardContent, DialogActions,
//   Modal, FormControl, InputLabel
// } from "@mui/material";

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const ShoppingCartModal = ({
//   appointShoppingCartModalOpen, setAppointShoppingCartModalOpen,
//   customerId,
//   editedShoppingCart, setEditedShoppingCart, goodName,
//   handleSaveShoppingCart // Отримуємо функцію з пропс
// }) => {
//   const [cartOfGoods, setCartOfGoods] = useState([]);
//   const [editedValues, setEditedValues] = useState({});
//   const [totalAmount, setTotalAmount] = useState(0);

//   const [payments, setPayments] = useState([]); // стан для збереження методів оплати
//   const [deliveries, setDeliveries] = useState([]); // стан для збереження методів доставки

//   const [address_delivery, setAddress_delivery] = useState("");
//   const [deliveriesMethodId, setDeliveriesMethodId] = useState("");
//   const [paymentsTypeId, setPaymentsTypeId] = useState("");
//   const [dataLoaded, setDataLoaded] = useState(false);

//   const [editedDeliveriesMethod, setEditedDeliveriesMethod] = useState('');
//   const [editedPaymentsType, setEditedPaymentsType] = useState('');

  

//   const loadCartData = () => {
//     fetch(`http://localhost:8080/goodsOrders/getCartByCustomerId?id=${customerId}`)
//       .then(response => response.json())
//       .then(data => {
//         setCartOfGoods(data);
//         const initialEditedValues = {};
//         let total = 0;

//         data.forEach(cartOfGood => {
//           initialEditedValues[cartOfGood.id] = Math.max(1, cartOfGood.quantity);
//           total += editedValues[cartOfGood.id] * cartOfGood.price;
//         });

//         setTotalAmount(total);
//         setEditedValues(initialEditedValues);
//       })
//       .catch(error => console.log(error));
//   };



//   useEffect(() => {
//     // Викликати функцію завантаження даних кожен раз, коли customerId змінюється
//     loadCartData();
//   }, [customerId]);

//   useEffect(() => {
//     // Викликати функцію завантаження даних кожен раз, коли відкривається модальне вікно
//     if (appointShoppingCartModalOpen) {
//       loadCartData();
//     }
//   }, [appointShoppingCartModalOpen]);


//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/paymentsType');
//         const data = await response.json();
//         setPayments(data);
//         console.log('Payments:', data);
//       } catch (error) {
//         console.error('Помилка при отриманні методів оплати:', error);
//       }
//     };

//     const fetchDeliveries = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/deliveriesMethod');
//         const data = await response.json();
//         setDeliveries(data);
//         console.log('Доставки:', data);
//       } catch (error) {
//         console.error('Помилка при отриманні методів доставки:', error);
//       }
//     };
//     // Викликаємо функції для отримання переліків при завантаженні компонента
//     fetchPayments();
//     fetchDeliveries();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const paymentsResponse = await fetch('http://localhost:8080/paymentsType');
//         const paymentsData = await paymentsResponse.json();
//         setPayments(paymentsData);

//         const deliveriesResponse = await fetch('http://localhost:8080/deliveriesMethod');
//         const deliveriesData = await deliveriesResponse.json();
//         setDeliveries(deliveriesData);

//         setDataLoaded(true); // Позначте, що дані завантажені
//       } catch (error) {
//         console.error('Помилка отримання даних:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const deleteCartItem = (cartItemId) => {
//     fetch(`http://localhost:8080/goodsOrders/?id=${cartItemId}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           setCartOfGoods(prevCart => prevCart.filter(item => item.id !== cartItemId));
//           console.log('Товар видалено успішно');
//         } else {
//           console.error('Помилка видалення товару');
//         }
//       })
//       .catch(error => console.error('Помилка видалення товару:', error));
//   };

//   const handleSaveButtonClick = () => {
//     const updatedCart = Object.entries(editedValues).map(([id, quantity]) => ({ id, quantity: parseInt(quantity) }));

//     fetch('http://localhost:8080/goodsOrders/editQuantityGoodTheCart', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedCart),
//     })
//       .then(response => response.text())
//       .then(data => {
//         console.log('Кількість товару успішно змінено:', data);
//         // Додайте додатковий код, який вам може знадобитися після збереження
//         setAppointShoppingCartModalOpen(false);
//       })
//       .catch(error => console.error('Помилка зміни кількості товару:', error));
//   };

//   const handleMakeOrderButtonClick = () => {

//     fetch('http://localhost:8080/orderLists/makeOrder', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
  
//           id: cartOfGoods[0].ordersListsId,
//           paymentsTypeId: editedPaymentsType,
//           deliveriesMethodId: editedDeliveriesMethod,
//           address_delivery: address_delivery,
//         // Передайте необхідні дані для оформлення замовлення
//         // Наприклад, ordersListToSaveDTO чи інші дані
//       }),
//     })
//       .then(response => response.text())
//       .then(data => {
//         console.log('Замовлення товару успішно оброблено:', data);
//         setAppointShoppingCartModalOpen(false);
//       })
//       .catch(error => console.error('Помилка оформлення замовлення:', error));
//   };

//   return (
//     <Modal
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: "50000",
//       }}
//       open={appointShoppingCartModalOpen}
//       onClose={() => { setAppointShoppingCartModalOpen(false); }}
//       aria-labelledby="parent-modal-title"
//       aria-describedby="parent-modal-description"
//     >

//       <Card
//         style={{
//           minWidth: "500px",
//           padding: "10px"
//         }}
//       >
//         <CardContent
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "15px",
//           }}
//         >
//           <TableContainer component={Paper} style={{ maxHeight: '500px', overflowY: 'auto' }}>
//             <Table size="small" aria-label="a dense table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell align="left" style={{ width: '30%' }}>Назва товару</TableCell>
//                   <TableCell align="left" style={{ width: '60px' }}>Ціна</TableCell>
//                   <TableCell align="left" style={{ width: '60px' }}>Кількість</TableCell>
//                   <TableCell align="left" style={{ width: '80px' }}>Разом</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody style={{ maxHeight: '350px', overflowY: 'auto' }}>
//                 {Array.isArray(cartOfGoods) ? (
//                   cartOfGoods.map((cartOfGood) => (
//                     <TableRow key={cartOfGood.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//                       <TableCell align="left" style={{ width: '30%' }}>
//                         <img
//                           src={cartOfGood.goodsGetAllDTO.photosGoodsDTOS && cartOfGood.goodsGetAllDTO.photosGoodsDTOS.length > 0
//                             ? cartOfGood.goodsGetAllDTO.photosGoodsDTOS[0].path
//                             : 'https://source.unsplash.com/random?wallpapers'}
//                           alt="Зображення товару"
//                           style={{ width: '20%', height: 'auto' }}
//                         />
//                         <h3>{cartOfGood.goodsGetAllDTO.name}</h3>
//                         {/* <TextField
//                           sx={{ marginLeft: '30px', marginTop: '20px', }}
//                           value={cartOfGood.goodsGetAllDTO.name}
//                           InputProps={{
//                             readOnly: true,
//                           }}
//                         /> */}
//                       </TableCell>
//                       <TableCell>
//                         {cartOfGood.price}
//                         {/* <TextField
//                           sx={{ marginTop: '20px', width: '120px' }}
//                           type={'number'}
//                           value={cartOfGood.price}
//                           InputProps={{
//                             readOnly: true,
//                           }}
//                         /> */}
//                       </TableCell>
//                       <TableCell>
//                         {/* {cartOfGood.quantityInShop} */}
//                         <TextField
//                           sx={{ marginTop: '20px', width: '100px' }}
//                           type={'number'}
//                           value={Math.max(1, editedValues[cartOfGood.id])}
//                           // onChange={(e) => setEditedValues({ ...editedValues, [cartOfGood.id]: e.target.value })}

//                           onChange={(e) => {
//                             const newQuantity = e.target.value;
//                             setEditedValues({ ...editedValues, [cartOfGood.id]: newQuantity });

//                             // Оновити загальну суму при зміні кількості товару
//                             const newTotalAmount = totalAmount + (newQuantity - cartOfGood.quantity) * cartOfGood.price;
//                             setTotalAmount(newTotalAmount);
//                           }}

//                           inputProps={{
//                             min: 1,
//                             max: (cartOfGood.quantity + cartOfGood.quantityInShop)
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell>
//                         {editedValues[cartOfGood.id] * cartOfGood.price === 0 ? cartOfGood.price : editedValues[cartOfGood.id] * cartOfGood.price}
//                         {/* <TextField
//                           sx={{ marginTop: '20px', width: '120px' }}
//                           type={'number'}
//                           value={editedValues[cartOfGood.id] * cartOfGood.price === 0 ? cartOfGood.price : editedValues[cartOfGood.id] * cartOfGood.price}
//                           InputProps={{
//                             readOnly: true,
//                           }}
//                         /> */}
//                       </TableCell>
//                       <TableCell align="left" style={{ width: '20%' }}>
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           color="error"
//                           onClick={() => {
//                             deleteCartItem(cartOfGood.id);
//                           }}
//                         >
//                           Видалити з корзини
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={3}>Немає доступних товарів.</TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </CardContent>
//         {/* <DialogActions>
//           <Button variant="outlined" color="error" onClick={() => setAppointShoppingCartModalOpen(false)}>Скасувати</Button>
//           <Button variant="outlined" onClick={handleSaveButtonClick}>
//             Зберегти
//           </Button>
//         </DialogActions> */}

//         <DialogActions>
//           <Grid container spacing={2}>
//             <Grid
//               container
//               direction="row"
//               justifyContent="flex-end"
//               alignItems="center"
//             >
//               <Grid item xs={4}
//                 container
//                 direction="row"
//                 justifyContent="flex-end"
//                 alignItems="center"
//               >
//                 <Button variant="outlined" color="error" onClick={() => setAppointShoppingCartModalOpen(false)}>
//                   Скасувати
//                 </Button>
//               </Grid>
//               <Grid item xs={4}
//               >
//                 <Button variant="outlined" onClick={handleSaveButtonClick}>
//                   Зберегти
//                 </Button>
//               </Grid>
//               <Grid item xs={4}>
//                 <h3>Сума: {totalAmount}</h3>
//               </Grid>
//             </Grid>
//             <Grid item xs={12}
//               container
//               direction="row"
//               justifyContent="flex-end"
//               alignItems="center"
//             >

//               <Grid item xs={3}>
//                 <Button variant="contained" fullWidth color="success" onClick={handleMakeOrderButtonClick}>
//                   Оформити замовлення
//                 </Button>
//               </Grid>
//             </Grid>

//           </Grid>
//         </DialogActions>

//         <FormControl required sx={{ width: '25%' }}>
//           <InputLabel id="paymentsType-label">Метод оплати</InputLabel>
//           <Select
//             label="Метод оплати"
//             labelId="paymentsType-label"
//             id="paymentsType-select"
//             value={editedPaymentsType}
//             onChange={(e) => setEditedPaymentsType(e.target.value)}
//             MenuProps={{
//               disablePortal: true, // <--- HERE
//               onClick: e => {
//                 e.preventDefault();
//               }
//             }}
//           >
//             {payments.map(payment => (
//               <MenuItem sx={{
//                 zIndex: 150000,
//                 position: "relative",
//               }} key={payment.id} value={payment.id}>
//                 {payment.payment_type}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <FormControl required sx={{ width: '25%' }}>
//           <InputLabel id="deliveriesMethod-label">Спосіб доставки</InputLabel>
//           <Select
//             label="Спосіб доставки"
//             labelId="deliveriesMethod-label"
//             id="deliveriesMethod-select"
//             value={editedDeliveriesMethod}
//             onChange={(e) => setEditedDeliveriesMethod(e.target.value)}
//             MenuProps={{
//               disablePortal: true, // <--- HERE
//               onClick: e => {
//                 e.preventDefault();
//               }
//             }}
//           >
//             {deliveries.map(delivery => (
//               <MenuItem sx={{
//                 zIndex: 150000,
//                 position: "relative",
//               }} key={delivery.id} value={delivery.id}>
//                 {delivery.method}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <TextField
//           required={true}
//           label="Адреса доставки"
//           // value={name}
//           onChange={(e) => setAddress_delivery(e.target.value)}
//           sx={{ width: '25%' }} // Встановлюємо ширину поля
//         />
//       </Card>
//     </Modal>
//   );
// };

// export default ShoppingCartModal;
import React, { useState, useEffect } from 'react';
import {
  Button, Grid, MenuItem,
  Card, Select, TextField,
  CardContent, DialogActions,
  Modal, FormControl, InputLabel
} from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
const ShoppingCartModal = ({
  appointShoppingCartModalOpen, setAppointShoppingCartModalOpen,
  customerId,
  editedShoppingCart, setEditedShoppingCart, goodName,
  handleSaveShoppingCart // Отримуємо функцію з пропс
}) => {
  const [cartOfGoods, setCartOfGoods] = useState([]);
  const [editedValues, setEditedValues] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const [payments, setPayments] = useState([]); // стан для збереження методів оплати
  const [deliveries, setDeliveries] = useState([]); // стан для збереження методів доставки

  const [address_delivery, setAddress_delivery] = useState("");
  const [deliveriesMethodId, setDeliveriesMethodId] = useState("");
  const [paymentsTypeId, setPaymentsTypeId] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  const [editedDeliveriesMethod, setEditedDeliveriesMethod] = useState('');
  const [editedPaymentsType, setEditedPaymentsType] = useState('');
  const [customers, setCustomers] = useState([]);

  const loadCartData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/goodsOrders/getCartByCustomerId?id=${customerId}`);
      const data = await response.json();
  
      const initialEditedValues = {};
      let total = 0;
  
      const updatedCart = data.map(cartOfGood => {
        const newQuantity = Math.max(1, cartOfGood.quantity);
        initialEditedValues[cartOfGood.id] = newQuantity;
        total += newQuantity * cartOfGood.price;
  
        return {
          ...cartOfGood,
          quantity: newQuantity,
          total: newQuantity * cartOfGood.price
        };
      });
  
      setTotalAmount(total);
      setEditedValues(initialEditedValues);
      setCartOfGoods(updatedCart);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  // useEffect(() => {
  //   // Оновити загальну суму при зміні editedValues
  //   const newTotalAmount = cartOfGoods.reduce((total, item) => {
  //     return total + (editedValues[item.id] || item.quantity) * item.price;
  //   }, 0);
  
  //   setTotalAmount(newTotalAmount);
  // }, [editedValues, cartOfGoods]);
  
  useEffect(() => {
    // Викликати функцію завантаження даних кожен раз, коли customerId змінюється
    loadCartData();
  }, [customerId]);

  useEffect(() => {
    // Викликати функцію завантаження даних кожен раз, коли відкривається модальне вікно
    if (appointShoppingCartModalOpen) {
      loadCartData();
    }
  }, [appointShoppingCartModalOpen]);

  useEffect(() => {
    // Отримання переліку покупців з сервера
    // (тимчасово, поки не буде працювати авторизація)
    fetch(`http://localhost:8080/customers/getAll`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error('HTTP Error: ' + res.status);
        }
      })
      .then((data) => {
        // Перевірка, чи отримані дані не є null
        if (data) {
          setCustomers(data);
          console.log(data);
        } else {
          console.error('Перелік покупців відсутній');
        }
      })
      .catch((error) => console.error('Помилка отримання переліку покупців:', error));
  }, []);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('http://localhost:8080/paymentsType');
        const data = await response.json();
        setPayments(data);
        console.log('Payments:', data);
      } catch (error) {
        console.error('Помилка при отриманні методів оплати:', error);
      }
    };

    const fetchDeliveries = async () => {
      try {
        const response = await fetch('http://localhost:8080/deliveriesMethod');
        const data = await response.json();
        setDeliveries(data);
        console.log('Доставки:', data);
      } catch (error) {
        console.error('Помилка при отриманні методів доставки:', error);
      }
    };
    // Викликаємо функції для отримання переліків при завантаженні компонента
    fetchPayments();
    fetchDeliveries();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentsResponse = await fetch('http://localhost:8080/paymentsType');
        const paymentsData = await paymentsResponse.json();
        setPayments(paymentsData);

        const deliveriesResponse = await fetch('http://localhost:8080/deliveriesMethod');
        const deliveriesData = await deliveriesResponse.json();
        setDeliveries(deliveriesData);

        setDataLoaded(true); // Позначте, що дані завантажені
      } catch (error) {
        console.error('Помилка отримання даних:', error);
      }
    };

    fetchData();
  }, []);

  const deleteCartItem = (cartItemId) => {
    fetch(`http://localhost:8080/goodsOrders/?id=${cartItemId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setCartOfGoods(prevCart => prevCart.filter(item => item.id !== cartItemId));
          console.log('Товар видалено успішно');
        } else {
          console.error('Помилка видалення товару');
        }
      })
      .catch(error => console.error('Помилка видалення товару:', error));
  };

  const handleSaveButtonClick = () => {
    const updatedCart = Object.entries(editedValues).map(([id, quantity]) => ({ id, quantity: parseInt(quantity) }));

    fetch('http://localhost:8080/goodsOrders/editQuantityGoodTheCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCart),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Кількість товару успішно змінено:', data);
        // Додайте додатковий код, який вам може знадобитися після збереження
        setAppointShoppingCartModalOpen(false);
      })
      .catch(error => console.error('Помилка зміни кількості товару:', error));
  };

  const handleMakeOrderButtonClick = () => {
    // Отримуємо назву методу доставки за його id
    const selectedDelivery = deliveries.find(delivery => delivery.id === editedDeliveriesMethod)?.method || '';
    // Отримуємо назву типу оплати за його id
    const selectedPayment = payments.find(payment => payment.id === editedPaymentsType)?.payment_type || '';
    const selectedCustomers = customers.find(customer => customer.id === customerId) || '';
  
    fetch('http://localhost:8080/orderLists/makeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: cartOfGoods[0].ordersListsId,
        paymentsTypeId: editedPaymentsType,
        deliveriesMethodId: editedDeliveriesMethod,
        address_delivery: address_delivery,
      }),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Замовлення товару успішно оброблено:', data.toString());
        setAppointShoppingCartModalOpen(false);
      })
      .catch(error => console.error('Помилка оформлення замовлення:', error));
  
    const emailData = {
      to: selectedCustomers.email,
      subject: 'Замовлення товару',
      text: `${selectedCustomers.name},Ваше замовлення прийнято!
        \nДата замовлення: ${new Date()}
        \nСума замовлення: ${totalAmount}
        \nМетод оплати: ${selectedPayment}
        \nСпосіб доставки: ${selectedDelivery}
        \nАдреса доставки: ${address_delivery}
        \nТовари у замовленні:\n${cartOfGoods.map(item => `${item.goodsGetAllDTO.name} - ${item.quantity} шт. - ${item.total} грн`).join('\n')}`
    };
    console.log(selectedCustomers);
  console.log(emailData);
    //HTTP-запит на сервер для відправлення листа на електронну пошту
    axios.post('http://localhost:8080/email/send', emailData)
      .then(response => {
        console.log('Лист відправлено успішно', response.data);
        // Додаткові дії після відправлення листа
      })
      .catch(error => {
        console.error('Помилка відправлення листа', error);
        // Обробка помилок
      });
  };
  
  

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "50000",
      }}
      open={appointShoppingCartModalOpen}
      onClose={() => { setAppointShoppingCartModalOpen(false); }}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >

      <Card
        style={{
          minWidth: "500px",
          padding: "10px"
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <TableContainer component={Paper} style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ width: '30%' }}>Назва товару</TableCell>
                  <TableCell align="left" style={{ width: '60px' }}>Ціна</TableCell>
                  <TableCell align="left" style={{ width: '60px' }}>Кількість</TableCell>
                  <TableCell align="left" style={{ width: '80px' }}>Разом</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ maxHeight: '350px', overflowY: 'auto' }}>
                {Array.isArray(cartOfGoods) ? (
                  cartOfGoods.map((cartOfGood) => (
                    <TableRow key={cartOfGood.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="left" style={{ width: '30%' }}>
                        <img
                          src={cartOfGood.goodsGetAllDTO.photosGoodsDTOS && cartOfGood.goodsGetAllDTO.photosGoodsDTOS.length > 0
                            ? cartOfGood.goodsGetAllDTO.photosGoodsDTOS[0].path
                            : 'https://source.unsplash.com/random?wallpapers'}
                          alt="Зображення товару"
                          style={{ width: '20%', height: 'auto' }}
                        />
                        <h3>{cartOfGood.goodsGetAllDTO.name}</h3>
                        {/* <TextField
                          sx={{ marginLeft: '30px', marginTop: '20px', }}
                          value={cartOfGood.goodsGetAllDTO.name}
                          InputProps={{
                            readOnly: true,
                          }}
                        /> */}
                      </TableCell>
                      <TableCell>
                        {cartOfGood.price}
                        {/* <TextField
                          sx={{ marginTop: '20px', width: '120px' }}
                          type={'number'}
                          value={cartOfGood.price}
                          InputProps={{
                            readOnly: true,
                          }}
                        /> */}
                      </TableCell>
                      <TableCell>
                        {/* {cartOfGood.quantityInShop} */}
                        <TextField
                          sx={{ marginTop: '20px', width: '100px' }}
                          type={'number'}
                          value={editedValues[cartOfGood.id]||1}
                          // onChange={(e) => setEditedValues({ ...editedValues, [cartOfGood.id]: e.target.value })}Math.max(1, )
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value, 10);
                            const updatedValues = { ...editedValues, [cartOfGood.id]: newQuantity };
                          
                            // Оновити загальну суму при зміні кількості товару
                            const newTotalAmount = cartOfGoods.reduce((total, item) => {
                              return total + (updatedValues[item.id] || item.quantity) * item.price;
                            }, 0);
                          
                            setTotalAmount(newTotalAmount);
                            setEditedValues(updatedValues);
                          }}
                          inputProps={{
                            min: 1,
                            max: (cartOfGood.quantity + cartOfGood.quantityInShop)
                          }}
                        />
                      </TableCell> 
                      <TableCell>
                        {editedValues[cartOfGood.id] * cartOfGood.price === 0 ?
                         cartOfGood.price 
                         : (editedValues[cartOfGood.id]|| 1) * cartOfGood.price}
                        {/* <TextField goodsOrder ? Math.floor(goodsOrder.price * (quantityPerItem[goodsOrder.id] ) * 100) / 100 : 'Недоступно'
                          sx={{ marginTop: '20px', width: '120px' }}
                          type={'number'}
                          value={editedValues[cartOfGood.id] * cartOfGood.price === 0 ? cartOfGood.price : editedValues[cartOfGood.id] * cartOfGood.price}
                          InputProps={{
                            readOnly: true,
                          }}
                        /> */}
                      </TableCell>
                      <TableCell align="left" style={{ width: '20%' }}>
                        <Button
                          variant="outlined"
                          size="small"
                          color="error"
                          onClick={() => {
                            deleteCartItem(cartOfGood.id);
                          }}
                        >
                          Видалити з кошика
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>Немає доступних товарів.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        {/* <DialogActions>
          <Button variant="outlined" color="error" onClick={() => setAppointShoppingCartModalOpen(false)}>Скасувати</Button>
          <Button variant="outlined" onClick={handleSaveButtonClick}>
            Зберегти
          </Button>
        </DialogActions> */}

        <DialogActions>
          <Grid container spacing={2}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item xs={4}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button variant="outlined" color="error" onClick={() => setAppointShoppingCartModalOpen(false)}>
                  Скасувати
                </Button>
              </Grid>
              <Grid item xs={4}
              >
                <Button variant="outlined" onClick={handleSaveButtonClick}>
                  Зберегти
                </Button>
              </Grid>
              <Grid item xs={4}>
                <h3>Загальна сума: {Math.floor(totalAmount * 100) / 100}</h3>
              </Grid>
            </Grid>
            <Grid item xs={12}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >

              <Grid item xs={3}>
                <Button variant="contained" fullWidth color="success" onClick={handleMakeOrderButtonClick}>
                  Оформити замовлення
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </DialogActions>

        <FormControl required sx={{ width: '25%' }}>
          <InputLabel id="paymentsType-label">Метод оплати</InputLabel>
          <Select
            label="Метод оплати"
            labelId="paymentsType-label"
            id="paymentsType-select"
            value={editedPaymentsType}
            onChange={(e) => setEditedPaymentsType(e.target.value)}
            MenuProps={{
              disablePortal: true, // <--- HERE
              onClick: e => {
                e.preventDefault();
              }
            }}
          >
            {payments.map(payment => (
              <MenuItem sx={{
                zIndex: 150000,
                position: "relative",
              }} key={payment.id} value={payment.id}>
                {payment.payment_type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl required sx={{ width: '25%' }}>
          <InputLabel id="deliveriesMethod-label">Спосіб доставки</InputLabel>
          <Select
            label="Спосіб доставки"
            labelId="deliveriesMethod-label"
            id="deliveriesMethod-select"
            value={editedDeliveriesMethod}
            onChange={(e) => setEditedDeliveriesMethod(e.target.value)}
            MenuProps={{
              disablePortal: true, // <--- HERE
              onClick: e => {
                e.preventDefault();
              }
            }}
          >
            {deliveries.map(delivery => (
              <MenuItem sx={{
                zIndex: 150000,
                position: "relative",
              }} key={delivery.id} value={delivery.id}>
                {delivery.method}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          required={true}
          label="Адреса доставки"
          // value={name}
          onChange={(e) => setAddress_delivery(e.target.value)}
          sx={{ width: '25%' }} // Встановлюємо ширину поля
        />
      </Card>
    </Modal>
  );
};

export default ShoppingCartModal;
