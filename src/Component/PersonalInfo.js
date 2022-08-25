import React from 'react';

function PersonalInfo({formData, setFormData}) {
  return (
    <div>
    <input type="text" placeholder='Email'
     value={formData.email}
     onChange={(event) =>setFormData({...formData, email:event.target.value })} />
    <input type="text" placeholder='Date of Birth'
     value={formData.dob}
     onChange={(event) =>setFormData({...formData, dob:event.target.value })} />
    </div>
  )
}

export default PersonalInfo;
