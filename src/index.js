import React from 'react';
import ReactDOM from 'react-dom';
import { DataTable } from './main';

ReactDOM.render(
  <React.StrictMode>
    <DataTable
      isLoading={false}
      columns={[
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
      ]}
      tableData={[
        { name: 'Asif', email: 'asifvora0@gmail.com' },
        { name: 'Rehan', email: 'rehankhan97@gmail.com' },
        { name: 'Zaara', email: 'zaara07@gmail.com' }
      ]}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
