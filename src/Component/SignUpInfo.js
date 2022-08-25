import React from 'react'

function SignUpInfo({formData, setFormData}) {
  return (
    <div className='sign-up-container'>
    <input type="text" placeholder='First Name' 
    value={formData.first}
     onChange={(event) =>setFormData({...formData, first:event.target.value })} />

    <input type="text" placeholder='Last Name' 
        value={formData.last}
     onChange={(event) =>setFormData({...formData, last:event.target.value })} />

    <input type="text" placeholder='Mobile no.' 
        value={formData.mobile}
     onChange={(event) =>setFormData({...formData, mobile:event.target.value })} />
    </div>
  )
}

export default SignUpInfo
