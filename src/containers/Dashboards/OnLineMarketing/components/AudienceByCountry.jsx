import React from 'react';
import { useTranslation } from 'react-i18next';
import { Progress, Table } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const Brasilia = `${process.env.PUBLIC_URL}/img/flags/Brasil.svg`;
const Argentina = `${process.env.PUBLIC_URL}/img/flags/Argentina.svg`;
const Gabon = `${process.env.PUBLIC_URL}/img/flags/Gabon.svg`;
const Ireland = `${process.env.PUBLIC_URL}/img/flags/Ireland.svg`;
const Italian = `${process.env.PUBLIC_URL}/img/flags/Italia.svg`;
const Sierra = `${process.env.PUBLIC_URL}/img/flags/Sierra.svg`;

const header = [
  { id: 0, title: 'Departamento' },
  { id: 1, title: 'Puntos' },
  { id: 2, title: 'Empresa' },
  { id: 3, title: 'Meta' },
];

const rows = [
  {
    id: 0,
    src: Brasilia,
    country: 'Mino-Bra',
    page_views: '12134',
    device: 'MinoWellness',
    value: 41,
    bounce_rate: '41%',
  }, {
    id: 1,
    src: Argentina,
    country: 'Mino-Arg',
    page_views: '47584',
    device: 'MinoWellness',
    bounce_rate: 30,
  }, {
    id: 2,
    src: Gabon,
    country: 'Mino-Ga',
    page_views: '24235',
    device: 'MinoWellness',
    value: 65,
  }, {
    id: 3,
    src: Italian,
    country: 'Mino-Ita',
    page_views: '2255',
    device: 'MinoWellness',
    value: 41,
  }, {
    id: 4,
    src: Sierra,
    country: 'Mino-Leone',
    page_views: '2421',
    device: 'MinoWellness',
    value: 31,
  }, {
    id: 5,
    src: Ireland,
    country: 'Mino-Ir',
    page_views: '805',
    device: 'MinoWellness',
    value: 70,
  },
];

const AudienceByCountry = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} xl={8} md={12} title={"Actividad por departamento"}> 
      <Table responsive className="table--bordered dashboard__audience-table">
        <thead>
          <tr>
            {header.map(item => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <tr key={item.id}>
              <td><img className="dashboard__table-flag" src={item.src} alt="flag" />{item.country}</td>
              <td>{item.page_views}</td>
              <td>{item.device}</td>
              <td>
                <div className="progress-wrap progress-wrap--blue">
                  <Progress value={item.value}>{`${item.value}%`}</Progress>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default AudienceByCountry;
