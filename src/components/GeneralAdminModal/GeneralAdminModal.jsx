import React, { useState } from 'react';
import './GeneralAdminModal.css'
import { useSelector } from 'react-redux';
import languageSelector from '../../assets/languages/languageSelector';

const GeneralAdminModal = ({ onClose, editingItem, checkboxValues, handleRestaurantUpdate }) => {
  const [title, setTitle] = useState(editingItem.restaurantName);
  const [location, setLocation] = useState(editingItem.location);
  const [categories, setCategories] = useState(editingItem.categories);
  const [errors, setErrors] = useState({});
  const language = useSelector(state => state.languageReducer )
  
  const getCheckboxState = (category) => {
    return categories.includes(category) || checkboxValues[category] || false;
  }
  const handleCategoryChange = (e) =>{
    const category = e.target.name;
    const isChecked = e.target.checked;
    setCategories((prevCategories) => {
      if (isChecked) {
        return [...prevCategories, category];
      } else {
        return prevCategories.filter((cat) => cat !== category);
      }
    })
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const form = e.target;
    const title = form.title.value
    const newCategories = Object.keys(checkboxValues).filter((cat) => categories.includes(cat));
    
    if (title.length <= 1 || typeof title !== 'string') {
      validationErrors.title = languageSelector(language, 'newRestaurantFormNameError');
    }
    if (newCategories.length === 0) {
      validationErrors.categories = languageSelector(language, 'newRestaurantFormCategoriesError');
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedRestaurant = {
      id: editingItem.id,
      restaurantPathName: title.replaceAll(' ', '').toLowerCase(),
      restaurantName: title,
      location,
      categories: newCategories,
      createdAt: editingItem.createdAt
    }
    handleRestaurantUpdate(updatedRestaurant)
    onClose();
  }
  
  return (
    <div className='generalAdminModal__container'>
    <section className='generalAdminModal__box'>
      <span>
       {languageSelector(language, 'restaurantEditTitle')}
      </span>
      <form className='generalAdminModal__form' onSubmit={handleSumbit}>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && <p className='restaurantAdminView__error'>{errors.title}</p>}
        <div className='generalAdminModal__checkbox'>
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
        {errors.categories && <p className='restaurantAdminView__error'>{errors.categories}</p>}
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
          <button className='generalAdminModal__button-save' type="submit">{languageSelector(language, 'save')}</button>
          <button className='generalAdminModal__button-cancel' type="button" onClick={onClose}>{languageSelector(language, 'cancel')}</button>
        </span>
      </form>
    </section>
  </div>
  )
}

export default GeneralAdminModal