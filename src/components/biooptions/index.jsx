import React from 'react'
import './styles.css'
import BioMenu from '../biomenu/index';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CreateIcon from '@mui/icons-material/Create';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMore';

function BioOptions() {
return (

  <div className="bio_menu">
      <div className="bio_options">
  <BioMenu className="selected" title="Posts"  />
  <BioMenu title="About" />
  <BioMenu title="Friends" />
  <BioMenu title="Photos" />
  <BioMenu title="Story Archive" />
  <div className="bio_icons">
  <BioMenu Icon={ExpandMoreOutlinedIcon} title="More" />
  <BioMenu Icon={ControlPointIcon} title="Add to Story" />
  <BioMenu Icon={CreateIcon} title="Edit Bio" />
  <BioMenu title="..." />
  </div>
  </div>
  </div>
  )
}
export default BioOptions;