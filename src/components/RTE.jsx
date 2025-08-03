import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'>
        {label && <label className='text-sm font-semibold mb-2'>{label}</label>}
        <Controller
            name={name || "content"}
            control={control}
            defaultValue={defaultValue}
            render={({field: {onChange}}) => (
              <Editor
              
              />
            )}
          />
    </div>
  )
}

export default RTE