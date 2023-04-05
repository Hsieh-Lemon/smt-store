import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, message } from 'antd';

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items = [
    {
        label: 'KANTA',
        key: '1'
    },
    {
        label: 'BoA',
        key: '2'
    },
    {
        label: 'TVXQ',
        key: '3'
    },
    {
        label: 'SUPER JUNIOR',
        key: '4'
    },
    {
        label: 'GIRLS GENERATION',
        key: '5'
    },
    {
        label: 'SHINee',
        key: '6'
    },
    {
        label: 'F(X)',
        key: '7'
    },
    {
        label: 'EXO',
        key: '8'
    },
    {
        label: 'RED VELVET',
        key: '9'
    },
    {
        label: 'NCT',
        key: '10'
    },
    {
        label: 'AESPA',
        key: '11'
    },
    {
        label: 'SUPER M',
        key: '12'
    },
    {
        label: 'GOT THE BEAT',
        key: '13'
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};
const DropDown = () => (
    <Space wrap>
        <Dropdown menu={menuProps}>
            <Button style={{
                width: 260,
                height: 40,
                borderRadius: 13,
                marginBottom: 62,
                marginTop: 57
            }}>
                <Space style={{fontSize:20}}>
                    ALL
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    </Space>
);
export default DropDown;