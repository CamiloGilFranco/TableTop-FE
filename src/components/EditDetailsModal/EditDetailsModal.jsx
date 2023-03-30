import React, { useState } from 'react';


const EditDetailsModal = ({ item, onClose, handleUpdateAddress, handleUpdatePhoneNumber  }) => {
  const [editingItem, setEditingItem] = useState(item);
  const [errors, setErrors] = useState({});


  const handleSumbit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    const form = e.target;
    const input = form.editedItem.value;
    if (input.length === 0) {
      validationErrors.error = 'Enter a valid Phone Number or Address'
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    onClose();

    if (item === editingItem) {
      return;
    }
    if (address.includes(item)) {
      handleUpdateAddress(address.indexOf(item), editingItem);
    } else {
      handleUpdatePhoneNumber(phoneNumber.indexOf(item), editingItem);
    }
  }

  return (
    <div className='modalComponent__container'>
      <section className='modalComponent__box'>
        <span>
          Here you can edit the adress or phone
        </span>
        <form className='modalComponent__form' onSubmit={handleSumbit}>
          <input
            type='text'
            name='editedItem'
            id='editedItem'
            value={editingItem}
            onChange={(event) => setEditingItem(event.target.value)}
          />
          {errors.error && <p className='restaurantAdminView__error'>{errors.error}</p>}
          <span className='modalComponent__buttons'>
            <button className='modalComponent__button-save' type="submit">Save</button>
            <button className='modalComponent__button-cancel' type="button" onClick={onClose}>Cancel</button>
          </span>
        </form>
      </section>
    </div>
  )
}

export default EditDetailsModal;