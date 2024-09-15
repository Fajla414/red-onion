import React from 'react';

const PlaceOrderDeliveryDetail = () => {
    return (
        <div>
            <h4 className='border-bottom border-black pb-2'>Edit Delivery Details</h4>
            <form className='mt-4'>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Deliver to door' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='107 rd No 8' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Flat, suite or floor' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Business Name' aria-describedby="emailHelp" />
                </div>
                <div >
                    <textarea className="form-control" placeholder="Add delivery instructor" style={{ height: '80px' }}></textarea>
                </div>
                <br />
                <button type="submit " className="btn btn-danger container ">Save & Continue</button>
            </form>
        </div>
    );
};

export default PlaceOrderDeliveryDetail;