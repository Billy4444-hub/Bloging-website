import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'>
        {label}
    </div>
  )
}

export default RTE