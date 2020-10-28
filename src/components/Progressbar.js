import React from 'react'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function Progressbar({iconName, label, progress, effect, progressWidth}) {
    

    
    return (
            <>
	            <div data-aos={effect} className="skillbar">
                    <div className="top">
                        <Icon disabled name={iconName} />
                        <div>
                            <p>{label}</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div style={{width: progressWidth + '%'}} className="progress">
                            <span>{progress}%</span>   
                        </div>
                    </div>
	            </div>
            </>
    )
}

export default Progressbar;
