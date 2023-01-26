import { Button } from "antd";
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StartButton =({isFavorite, onClick}) => {
    const Icon = isFavorite ? StarFilled : StarOutlined;
    return <Button icon={<Icon/>} onClick={onClick}/>
}

export default StartButton;