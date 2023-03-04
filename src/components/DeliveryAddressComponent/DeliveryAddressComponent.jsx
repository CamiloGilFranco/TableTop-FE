import './DeliveryAddressComponent.css'
const DeliveryAddressComponent = () => {
    return (
        <section className='container'>
            <h2 className='container-title'>Delivery Address:</h2>
            <div className='save-info'>
                <h3 className='save-info__value'>Saved Address</h3>
                <button className='save-info__button'>+ Add New Address</button>
            </div>
            <main className='main-box'>
                <section className='personal-info'>
                    <div className='content'>
                        <h3 className='content__name'>Mark Jecno</h3>
                        <button className='content__button'>Home</button>
                    </div>
                    <p className='personal-info-data'>549 Sulphur Springs Road</p>
                    <p className='personal-info-data'>Downers Grove, IL</p>
                    <p className='personal-info-data'>60515</p>
                    <p className='personal-info-data'>Mobile: +91 123 - 456 - 7890</p>
                    <div className='buttons'>
                        <button className='button--green'>Edit</button>
                        <button className='button--red'>Remove</button>
                    </div>
                </section>
                <section className='personal-info'>
                    <div className='content'>
                        <h3 className='content__name'>Maark Jecno</h3>
                        <button className='content__button'>Home</button>
                    </div>
                    <p className='personal-info-data'>549 Sulphur Springs Road</p>
                    <p className='personal-info-data'>Downers Grove, IL</p>
                    <p className='personal-info-data'>60515</p>
                    <p className='personal-info-data'>Mobile: +91 123 - 456 - 7890</p>
                    <div className='buttons'>
                        <button className='button--green'>Edit</button>
                        <button className='button--red'>Remove</button>
                    </div>
                </section>
            </main>

        </section>
    )
}

export {DeliveryAddressComponent};