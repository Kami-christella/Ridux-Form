import React from 'react'

// const TextField = ({ label, inputProps, onchange, value }) => {
//   return (
//     <div className='flex flex-col'>
//       <label className='mb-2 text-base text-gray-800'>{label}</label>
//       <input 
//       className='bg-gray-200 py-2 px-3 border-2 outline-none'
//         {...inputProps}
//         onChange={onchange}
//         value={value}
//       />
         
//     </div>
const TextField = ({ label, value, onChange, inputProps }) => (
  <div>
    <label>{label}</label>
    <input value={value} onChange={onChange} {...inputProps} />
  </div>
);

 // )
//}

export default TextField
