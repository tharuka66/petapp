import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import React from 'react';

const text = `
  Vitae et leo duis ut diam. Amet venenatis urna cursus eget nunc scelerisque. Nec ultrices dui sapien eget. Lectus magna fringilla urna porttitor rhoncus dolor purus
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'How Petopia Pet Care Started',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'Mission Statement',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'Value Added Services',
        children: <p>{text}</p>,
    },
    {
        key: '4',
        label: 'Social Responsability',
        children: <p>{text}</p>,
    },
];

const ServiceCollapse: React.FC = () =>
    <div >
        <h1>Welcome To Our Family</h1>
        <h5>Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Auctor augue mauris augue neque gravida in fermentum</h5>
        <Collapse defaultActiveKey={['1']} ghost items={items} />
    </div>

;

export default ServiceCollapse;
