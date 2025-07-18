import { useState, useEffect } from 'react';
import Index from './components/index.jsx';
import Content from './components/content.jsx';
import { set } from 'mongoose';

function App() {
  const [name, setName] = useState('');
  const [passWord, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [editId, setEditId] = useState(null);



  const fetchData = async () => {
    try {
      const response = await fetch('https://log-in-server-q7c8.onrender.com/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: name,
          passWord: passWord,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User created:', data);
        setIsLoading(false);
      } else {
        console.error('Server error');
        setIsLoading(true);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setIsLoading(true);
    }
  };



  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://log-in-server-q7c8.onrender.com/read", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setItems(data);
        console.log("All Users:", data);
        setIsLoading(false);
      } else {
        console.error("Server Error");
        setIsLoading(true);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const updateData = async (id, userName, passWord) => {
    try {
      const response = await fetch(`https://log-in-server-q7c8.onrender.com/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, passWord }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        console.log("User updated:", updatedUser);
        getData(); 
      } else {
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };


  const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        console.log("✅ Deleted:", result.message);
        getData()
      } else {
        console.error("❌ Error:", result.error);
      }
    } catch (error) {
      console.error("⚠️ Server Error:", error.message);
    }
  };


  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-sky-500 to-indigo-500">
      <Index
        name={name}
        setName={setName}
        passWord={passWord}
        setPassword={setPassword}
        fetchData={fetchData}
        getData={getData}
        updateData={updateData}
        isLoading={isLoading}
        editId={editId}
        setEditId={setEditId}
        deleteData={deleteData}
      />
      <Content items={items} isLoading={isLoading} updateData={updateData} name={name}
        setName={setName}
        passWord={passWord}
        setPassword={setPassword}
        setEditId={setEditId}
        deleteData={deleteData}
        fetchData={fetchData}
        />

      />
    </div>
  );
}

export default App;
