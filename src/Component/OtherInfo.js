import React from 'react'

function OtherInfo({formData, setFormData}) {
  return (
    <div>
    <input type="text" placeholder='Recovery mobile no.'
     value={formData.recovery}
     onChange={(event) =>setFormData({...formData, recovery:event.target.value })} />
    <input type="text" placeholder='Aadhar no.'
     value={formData.aadhar}
     onChange={(event) =>setFormData({...formData, aadhar:event.target.value })} />
    </div>
  )
}

export default OtherInfo
