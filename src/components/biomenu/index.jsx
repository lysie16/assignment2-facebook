import React from 'react'
import './styles.css'

function BioMenu({Icon, title}) {
    return(
        <div className="biomenu">
             {Icon && <Icon />}
                <h4>{ title }</h4>
    </div>
    )
}
export default BioMenu;