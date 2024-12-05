export const formConfig = {
    fields: [
      { name: 'name', label: 'Name', type: 'text', validation: { required: true } },
      { name: 'email', label: 'Email', type: 'text', validation: { required: true, pattern: '\\S+@\\S+\\.\\S+' } },
      { name: 'message', label: 'Message', type: 'textarea', validation: { required: true, minLength: 10 } },
      { name: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female','Other'] },
      { name: 'interests', label: 'Interests', type: 'checkbox', options: ['Coding', 'Music', 'Sports'] },
      { name: 'date', label: 'Date', type: 'date' },
    ],
    actions: [
      { label: 'Submit', type: 'submit' },
      { label: 'Reset', type: 'reset', onClick: () => console.log('Reset clicked') },
    ],
  };