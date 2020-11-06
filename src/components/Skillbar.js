import React from 'react'
import Progressbar from '../components/Progressbar';


function Skillbar() {
    return (
    <div id="skills" className="skillbars">

        <div data-aos="fade-right" className="headline">
            <h1>Skills</h1>
            <div className="bar"></div>
        </div>

        <div className="skillbar-container">
            <Progressbar label="joomla!" progress="90" iconName="joomla huge icon" effect="fade-right" progressWidth="90"/>
            <Progressbar label="wordpress" progress="80" iconName="wordpress huge icon" effect="fade-left" progressWidth="80" />
            <Progressbar label="git" progress="70" iconName="github huge icon" effect="fade-right" progressWidth="70" />
            <Progressbar label="html5" progress="100" iconName="html5 huge icon" effect="fade-left" progressWidth="100" />
            <Progressbar label="css/sass" progress="100" iconName="css3 huge icon" effect="fade-right" progressWidth="100" />
            <Progressbar label="javascript" progress="90" iconName="js huge icon" effect="fade-left" progressWidth="90" />
            <Progressbar label="node js" progress="75" iconName="node js huge icon" effect="fade-right" progressWidth="75" />
            <Progressbar label="php" progress="80" iconName="php huge icon" effect="fade-left" progressWidth="80" />
            <Progressbar label="react" progress="70" iconName="react huge icon" effect="fade-right" progressWidth="70" />
            <Progressbar label="linux" progress="60" iconName="linux huge icon" effect="fade-right" progressWidth="60" />
            <Progressbar label="laravel" progress="70" iconName="laravel huge icon" effect="fade-right" progressWidth="70" />
        </div>
    </div>
    
    
    )
}

export default Skillbar;
