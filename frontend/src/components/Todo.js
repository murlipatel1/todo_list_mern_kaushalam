import { useState, useEffect } from 'react';
import axios from 'axios';
import './Todos.css';

function Todo() {
  const [itemText, setItemText] = useState('');
  const [itemStatus, setItemStatus] = useState('pending');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');
  const [updateItemStatus, setUpdateItemStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Get token from localStorage
  const token = localStorage.getItem('token');
  console.log(token);
  // Add new todo item to database
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://todo-list-mern-kaushalam.vercel.app/api/todos/item' , {
        item: itemText,
        status: itemStatus,
      },{
        headers: {
          'Authorization': `${token}`, // Add the token to the Authorization header
        }
      }
      );
      setListItems(prev => [...prev, res.data]);
      setItemText('');
      setItemStatus('pending');
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch all todo items from database
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get('https://todo-list-mern-kaushalam.vercel.app/api/todos/items',{
          headers: {
            'Authorization': token, // Add the token to the Authorization header
            'Content-Type': 'application/json', // Set the content type
          }
        });
        setListItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, []);

  // Delete item when clicked on delete
  const deleteItem = async (id) => {
    try {
      await axios.delete(`https://todo-list-mern-kaushalam.vercel.app/api/todos/item/${id}`,{
        headers: {
          'Authorization': token, // Add the token to the Authorization header
          'Content-Type': 'application/json', // Set the content type
        }
      });
      const newListItems = listItems.filter(item => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  // Update item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://todo-list-mern-kaushalam.vercel.app/api/todos/item/${isUpdating}`, {
        item: updateItemText,
        status: updateItemStatus,
      },{
        headers: {
          'Authorization': token, // Add the token to the Authorization header
          'Content-Type': 'application/json', // Set the content type
        }
      });
      const updatedListItems = listItems.map(item =>
        item._id === isUpdating ? res.data : item
      );
      setListItems(updatedListItems);
      setUpdateItemText('');
      setUpdateItemStatus('');
      setIsUpdating('');
    } catch (err) {
      console.log(err);
    }
  };

  // Show input field for updating the item
  const renderUpdateForm = (item) => (
    <form className="update-form" onSubmit={(e) => updateItem(e)}>
      <input
        className="update-new-input"
        type="text"
        placeholder="New Item"
        onChange={e => setUpdateItemText(e.target.value)}
        value={updateItemText}
      />
      <select
        className="update-new-select"
        onChange={e => setUpdateItemStatus(e.target.value)}
        value={updateItemStatus}
      >
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button className="update-new-btn" type="submit">Update</button>
    </form>
  );

  // Filter items based on search query
  const filteredItems = listItems.filter(item =>
    item.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={e => setItemText(e.target.value)}
          value={itemText}
        />
        <select
          className="form-select"
          onChange={e => setItemStatus(e.target.value)}
          value={itemStatus}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by name or status"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <div className="todo-listItems">
        {filteredItems.map(item => (
          <div className="todo-item" key={item._id}>
            {isUpdating === item._id ? (
              renderUpdateForm(item)
            ) : (
              <>
                <p className="item-content">{item.item}</p>
                <p className="item-status">{item.status}</p>
                <button className="update-item" onClick={() => {
                  setIsUpdating(item._id);
                  setUpdateItemText(item.item);
                  setUpdateItemStatus(item.status);
                }}>Update</button>
                <button className="delete-item" onClick={() => deleteItem(item._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
