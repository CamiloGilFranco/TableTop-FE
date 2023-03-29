import React, { useState } from 'react';
import './GeneralAdminModal.css'

const GeneralAdminModal = ({ onClose, editingItem, checkboxValues }) => {
  const [title, setTitle] = useState(editingItem.restaurantName);
  const [location, setLocation] = useState(editingItem.location);
  const [categories, setCategories] = useState(editingItem.categories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [errors, setErrors] = useState({});
  
  const getCheckboxState = (category) => {
    return categories.includes(category) || checkboxValues[category] || false;
  }
  const handleCategoryChange = (e) =>{
    const category = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setCategories([...categories, category]);
    } else {
      setCategories(categories.filter((cat) => cat !== category));
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    onClose();
    const form = e.target;
    const title = form.title.value
    const newCategories = categories.filter((cat) => selectedCategories.includes(cat));


  }

  return (
    <div className='generalAdminModal__container'>
    <section className='generalAdminModal__box'>
      <span>
        Here you can edit the details of the Restaurant
      </span>
      <form className='generalAdminModal__form' onSubmit={handleSumbit}>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
        />
        {/* {errors.title && <p className='restaurantAdminView__error'>{errors.title}</p>} */}
        <div>
          {Object.keys(checkboxValues).map((key) => (
            <label key={key}>
              <input
                type='checkbox'
                name={key}
                checked={getCheckboxState(key)}
                onChange={handleCategoryChange}
              />
              {key}
            </label>
          ))}
        </div>
        {/* {errors.price && <p className='restaurantAdminView__error'>{errors.price}</p>} */}
        <select
          name='location'
          id='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value='bogota'>Bogotá</option>
          <option value='medellin'>Medellín</option>
          <option value='cali'>Calí</option>
          <option value='cartagena'>Cartagena</option>
          <option value='bucaramanga'>Bucaramanga</option>
        </select>
        {/* {errors.description && <p className='restaurantAdminView__error'>{errors.description}</p>} */}
        <span className='generalAdminModal__buttons'>
          <button className='generalAdminModal__button-save' type="submit">Save</button>
          <button className='generalAdminModal__button-cancel' type="button" onClick={onClose}>Cancel</button>
        </span>
      </form>
    </section>
  </div>
  )
}

export default GeneralAdminModal