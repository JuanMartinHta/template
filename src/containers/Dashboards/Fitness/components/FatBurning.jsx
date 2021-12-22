import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  AreaChart, Area, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';

const data = [
  { name: 'Page A', Peso: 56 },
  { name: 'Page B', Peso: 42 },
  { name: 'Page C', Peso: 54 },
  { name: 'Page D', Peso: 43 },
  { name: 'Page E', Peso: 45 },
  { name: 'Page E', Peso: 41 },
  { name: 'Page F', Peso: 50 },
  { name: 'Page G', Peso: 58 },
];

const FatBurning = ({ dir, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={7} xl={6} md={12} xs={12}  title={'Peso Promedio'}>
    {/* // title={t('fitness_dashboard.fat_burning')}> */}
      <div className="dashboard__weight-stats">
        <div className="dashboard__weight-stat">
          <p className="dashboard__weight-stat-title">Rango de peso</p>
          <p className="dashboard__weight-stat-value dashboard__weight-stat-value--control">+3 kg</p>
        </div>
        <div className="dashboard__weight-stat">
          <p className="dashboard__weight-stat-title">Promedio de peso </p>
          <p className="dashboard__weight-stat-value dashboard__weight-stat-value--total">58 kg</p>
        </div>
      </div>
      <div dir="ltr">
        <ResponsiveContainer height={250}>
          <AreaChart
            data={data}
            margin={{
              top: 0, right: 0, left: -15, bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FA697D" stopOpacity={1} />
                <stop offset="100%" stopColor="#E14C4C" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <YAxis
              tickFormatter={value => `${value}kg`}
              axisLine={false}
              tickLine={false}
              orientation={dir === 'rtl' ? 'right' : 'left'}
            />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Area
              type="monotone"
              dataKey="Peso"
              stroke="#F66C7D"
              strokeWidth={3}
              fill="url(#colorUv)"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

FatBurning.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(FatBurning);
