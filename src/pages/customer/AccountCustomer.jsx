import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AccountCustomer.css';

function AccountCustomer() {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [editing, setEditing] = useState(false);

  const [userData, setUserData] = useState({
    id: null,
    name: '',
    goods: [],
    email: '', 
    phone: '',
    address: '',
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    axios.get('http://localhost:8080/customers/getOneFull?id=1')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); 

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/customers/update/${userData.id}`, userData)
      .then((response) => {
        console.log('User data updated:', response.data);
        setEditing(false);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
       
      });
  };

  return (
    <div className="account-container">
      <div className="menu">
        <button
          className={activeSection === 'personalInfo' ? 'active' : ''}
          onClick={() => handleSectionChange('personalInfo')}
        >
          Особисті дані
        </button>

        <button
          className={activeSection === 'orders' ? 'active' : ''}
          onClick={() => handleSectionChange('orders')}
        >
          Мої замовлення
        </button>

        <button
          className={activeSection === 'phone' ? 'active' : ''}
          onClick={() => handleSectionChange('phone')}
        >
          Номер телефону
        </button>

        <button
          className={activeSection === 'email' ? 'active' : ''}
          onClick={() => handleSectionChange('email')}
        >
          E-mail
        </button>

        <button
          className={activeSection === 'address' ? 'active' : ''}
          onClick={() => handleSectionChange('address')}
        >
          Адреса доставки
        </button>
      </div>
      <div className="content">
        {activeSection === 'personalInfo' && (
          <div>
            <h3>Особисті дані</h3>
            {editing ? (
              <div>
                {/* <label>Name:</label> */}
                <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
                <button onClick={handleUpdate}>Зберегти</button>
                <button onClick={handleCancelEdit}>Скасувати</button>
              </div>
            ) : (
              <div>
                <p>{userData.name}</p>
                <button onClick={handleEditClick}>Редагувати</button>
              </div>
            )}
          </div>
        )}

        {activeSection === 'orders' && (
          <div>
            <h3>Мої замовлення</h3>
            {Array.isArray(userData.goods) && userData.goods.length > 0 ? (
              <ul>
                {userData.goods.map((order, index) => (
                  <li key={index}>
                    <p>Замовлення ID: {order.id}</p>
                    <p>Кількість: {order.quantity}</p>
                    <p>Ціна: {order.price}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Немає доступних замовлень.</p>
            )}
          </div>
        )}

        {activeSection === 'phone' && (
          <div>
            <h3>Номер телефону</h3>
            {editing ? (
              <div>
                <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} />
                <button onClick={handleUpdate}>Зберегти</button>
                <button onClick={handleCancelEdit}>Скасувати</button>
              </div>
            ) : (
              <div>
                <p>{userData.phone}</p>
                <button onClick={handleEditClick}>Редагувати</button>
              </div>
            )}
          </div>
        )}

        {activeSection === 'email' && (
          <div>
            <h3>Email</h3>
            {editing ? (
              <div>
                <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
                <button onClick={handleUpdate}>Зберегти</button>
                <button onClick={handleCancelEdit}>Скасувати</button>
              </div>
            ) : (
              <div>
                <p>{userData.email}</p>
                <button onClick={handleEditClick}>Редагувати</button>
              </div>
            )}
          </div>
        )}

        {activeSection === 'address' && (
          <div>
            <h3>Адреса доставки</h3>
            {editing ? (
              <div>
                <input type="text" name="address" value={userData.address} onChange={handleInputChange} />
                <button onClick={handleUpdate}>Зберегти</button>
                <button onClick={handleCancelEdit}>Скасувати</button>
              </div>
            ) : (
              <div>
                <p>{userData.address}</p>
                <button onClick={handleEditClick}>Редагувати</button>
              </div>
            )}
          </div>
        )}

        

      </div>
    </div>
  );
}

export default AccountCustomer;