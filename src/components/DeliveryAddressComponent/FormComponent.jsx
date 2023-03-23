import './FormComponent.css'

const FormComponent = () => {
  return(
    
      <form className="form-add-address">
        <div className='form-header'>
          <span className="add-address-title">Add new Address</span>
        </div>

        <label htmlFor="name" className="label">Name</label>
        <input type="text" id="name" name="name" required="" class="input"/>

        <label htmlFor="mobile" className="label">Mobile Number</label>
        <input type="text" id="name" name="name" required="" class="input"/>

        <label htmlFor="address" className="label">Address</label>
        <input type="text" id="address" name="address" required="" class="input"/>

        <label htmlFor="mobile" className="label">City</label>
        <input type="text" id="mobile" name="mobile" required="" class="input"/>

        <label htmlFor="zip" className="label">Zip</label>
        <input type="zip" id="zip" name="zip" required="" className="input"/>

        <div className='form-buttons'>
        <button className="form-button-close">CLOSE</button>
        <button type="submit" className="form-button-add">ADD ADDRESS</button>
        </div>

      </form>
  )
}
export default FormComponent;