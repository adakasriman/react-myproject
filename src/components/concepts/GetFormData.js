import React, { useState } from 'react';

function GetFormData() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        matherName: "",
        brotherName: "",
        state: "",
    }); // formData is a variable that storing form values
    const [dataFromForm, setDataFromForm] = useState({})
    const [boolean, setBoolean] = useState(false);
    /*
    --> onChange method is assigning the input value to name attribute of the  input and dropdown.
    */
    function chaneEvent(e) {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value }); //here assiging the value to name attribute
    }
    function submit(e) {  // onsubmit 
        e.preventDefault();
        setDataFromForm(formData);
        setBoolean(true);
    }

    return (
        <div className="display_flex gap_20">
            <form className='form' onSubmit={submit}>
                <div className='fields mt-4 mb-4'>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={chaneEvent} />
                </div>
                <div className='fields'>
                    <label>Last Name</label>
                    <input type="text" onChange={chaneEvent} name="lastName" />
                </div>
                <div className='fields'>
                    <label>Father Name</label>
                    <input type="text" onChange={chaneEvent} name="fatherName" /></div>
                <div className='fields'>
                    <label>Mother Name</label>
                    <input type="text" onChange={chaneEvent} name="matherName" /></div>
                <div className='fields'>
                    <label>Brother Name</label>
                    <input type="text" onChange={chaneEvent} name="brotherName" />
                </div>
                <div className='fields'>
                    <label>State</label>
                    <select name='state' onChange={chaneEvent}>
                        <option>Select State</option>
                        <option value="ap">AP</option>
                        <option value="ts">TS</option>
                        <option value="tn">TN</option>
                        <option value="kl">KL</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
            <div>
                {boolean && <div>
                    <h4>Form Data</h4>
                    <>
                        {dataFromForm.firstName}
                        <br />
                        {dataFromForm.lastName}
                        <br />
                        {dataFromForm.fatherName}
                        <br />
                        {dataFromForm.matherName}
                        <br />
                        {dataFromForm.brotherName}
                        <br />
                        {dataFromForm.state}
                    </>

                </div>}
            </div>

        </div>
    );
}

export default GetFormData;


