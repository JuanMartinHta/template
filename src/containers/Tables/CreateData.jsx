import React, { useMemo } from 'react';

const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'Nombre',
        accessor: 'first',
      },
      {
        Header: 'Apellido',
        accessor: 'last',
        disableGlobalFilter: true,
      },
      {
        Header: 'correo',
        accessor: 'user',
        disableGlobalFilter: true,
      },
      {
        Header: 'Edad',
        accessor: 'age',
        disableGlobalFilter: true,
        Footer: (info) => {
          const { rows, flatRows } = info;
          const totalAge = useMemo(
            () => rows.reduce((sum, row) => Number(row.values.age) + sum, 0),
            [rows],
          );
          const age = Math.round(totalAge / flatRows.length);
          return <span>{age}</span>;
        },
      },
      {
        Header: 'Pulsera GX',
        accessor: 'date',
        disableGlobalFilter: true,
      },
      {
        Header: 'Empresa',
        accessor: 'location',
        disableGlobalFilter: true,
      },
      {
        Header: 'Equipo',
        accessor: 'work',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        id: i,
        first: ['Juan', 'Juan  ', 'Juan'][Math.floor((Math.random() * 3))],
        last: ['Perez', 'Perez  ', 'Perez'][Math.floor((Math.random() * 3))],
        user: ['correo@correo.com', 'correo@correo.com', 'correo@correo.com'][Math.floor((Math.random() * 3))],
        age: Math.min(100, Math.round(Math.random() * 30) + 20),
        // date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
        date: ['00:1e:c2:9e:28:6b'],
        location: ['Minowellss', 'Minowellss', 'Minowellss', 'Minowellss'][Math.floor((Math.random() * 4))],
        work: ['Los del A', 'Los del B', 'Los del C', 'Los del D', 'Los del E'][Math.floor((Math.random() * 5))],
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
