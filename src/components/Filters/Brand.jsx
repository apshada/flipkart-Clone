import React from 'react'
import { Checkbox, Divider } from 'semantic-ui-react'

const Brand = () => {
    return(
        <div class="form-group">
        <Divider>
        <h2 for="formControlRange">Brand</h2>
        </Divider><br />


        <div style={{display : 'flex', flexDirection : 'row' }}>
        <Checkbox inputData="Highest run" />
        <p>Apple</p>
        </div>

        <div style={{display : 'flex', flexDirection : 'row' }}>
        <Checkbox inputData="Highest run" />
        <p>Samsung</p>
        
        </div>

        <div style={{display : 'flex', flexDirection : 'row' }}>
        <Checkbox inputData="Highest run" />  
      <p>Realme</p>
      
        </div>

        <div style={{display : 'flex', flexDirection : 'row' }}>
        <Checkbox inputData="Highest run" />
        <p>Poco</p>
     
        </div>


        </div>

    );
}


export default Brand