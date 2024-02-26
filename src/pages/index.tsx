import {Col, Divider, Row} from 'antd';
import { Line, Column, Pie, Scatter } from '@ant-design/charts';

export default function HomePage() {
  const lineConfig = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/indices.json',
    },
    xField: (d) => new Date(d.Date),
    yField: 'Close',
    colorField: 'Symbol',
    normalize: { basis: 'first', groupBy: 'color' },
    scale: {
      y: { type: 'log' },
    },
    axis: {
      y: { title: '↑ Change in price (%)' },
    },
    label: {
      text: 'Symbol',
      selector: 'last',
      style: {
        fontSize: 10,
      },
    },
    tooltip: { channel: 'y', valueFormatter: '.1f' },
  };
  const columnConfig = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json',
    },
    xField: 'year',
    yField: 'value',
    colorField: 'type',
    stack: true,
    interaction: {
      tooltip: {
        render: (e, { title, items }) => {
          return (
            <div key={title}>
              <h4>{title}</h4>
              {items.map((item: any) => {
                const { name, value, color } = item;
                return (
                  <div>
                    <div style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: color,
                            marginRight: 6,
                          }}
                        ></span>
                        <span>{name}</span>
                      </div>
                      <b>{value}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        },
      },
    },
  };
  const pieConfig = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    paddingRight: 80,
    label: {
      text: 'value',
      position: 'outside',
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  const scatterConfig = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/basement_prod/6b4aa721-b039-49b9-99d8-540b3f87d339.json',
    },
    xField: 'height',
    yField: 'weight',
    colorField: 'gender',
  };
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Data Visualization Template</h1>
      <Divider/>
      <Row>
        <Col span={12}><Line {...lineConfig} /></Col>

        <Col span={12}> <Column {...columnConfig} /></Col>
      </Row>
      <Row>
        <Col span={12}> <Pie {...pieConfig} /></Col>
        <Col span={12}><Scatter {...scatterConfig}/></Col>
      </Row>
    </>
  );
}
