import React, { useState } from 'react';


const EditDetailsModal = ({ item, onClose, handleDetailsUpdate, phoneNumber, address, index }) => {
  const [editingItem, setEditingItem] = useState(item);
  const [errors, setErrors] = useState({});

  console.log(index);

  const handleSubmit = (e) => {
    const validationErrors = {};

    const form = e.target;
    const input = form.editedItem.value;
    if (input.length === 0) {
      validationErrors.error = 'Enter a valid Phone Number or Address';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (phoneNumber.includes(item)) {
      handleDetailsUpdate(phoneNumber, index, input);
    } else if (address.includes(item)) {
      handleDetailsUpdate(address, index, input);
    }
    
    setErrors({});
    onClose();
  };

  return (
    <div className='modalComponent__container'>
      <section className='modalComponent__box'>
        <span>
          Here you can edit the adress or phone
        </span>
        <form className='modalComponent__form' onSubmit={handleSubmit}>
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