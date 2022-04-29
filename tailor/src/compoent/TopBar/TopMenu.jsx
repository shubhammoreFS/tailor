import React from 'react';
import './menu.css';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export default function TopMenu() {
    return (
        <div className='TopMenu'>
            <div className='menuwrapper'>
                <div className='left'>
                    <span className='logo'>Tailor Software</span>

                </div>
                <div className='right'>

                    <div className='topcontainer'>
                        <CircleNotificationsIcon />
                         <span class="topIconBadge">2</span>
                    </div> 
                    <div className='topcontainer'>
                        <LanguageIcon />
                        <span class="topIconBadge">2</span>
                    </div> 
                    <div className='topcontainer'>
                        <SettingsIcon/> 
                    </div>
                    <img src='https://media.istockphoto.com/photos/little-baby-boy-with-knitted-hat-in-a-basket-happily-smiling-and-at-picture-id1320837181?b=1&k=20&m=1320837181&s=170667a&w=0&h=rx3UZuyHkkCe5MxNO2ygAvgtoqriXivumFqCnNPOc7k=' width={40}  height={40} className="topavater" />
                </div>
            </div>
        </div>
    )
}
