import React from 'react';
import Button from '../../components/button/button';
import ImageCanvas from '../../components/imagecanvas/imagecan';
import coin from '../../assets/coin.png';
import './welcome.scss';

const Welcome = ({nextPage}) => {
    return(
        <div className="welcome">
            <ImageCanvas imgSrc={coin}/>
            <p className="welcome-title">Split a Bill <br/>with Diviser</p>
            <p className="welcome-subtitle">You relax while<br/>we do the Math :D</p>
            <Button
                button_text="Let's Go"
                action={nextPage} 
            />
        </div>
    )
}
export default Welcome;