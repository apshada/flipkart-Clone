import React from 'react'
import { Checkbox, Divider } from 'semantic-ui-react'

const Rating = () => {

      // const [rate, setRate] = 


    return(
      
        <div class="form-group">
        <Divider>
        <h2 for="formControlRange">Rating</h2>
        </Divider><br />


        <div style={{display : 'flex', flexDirection : 'row' }}>
        <Checkbox inputData="one" />
        <p>1★ & above</p>
        </div>

        <div style={{display : 'flex', flexDirection : 'row' }}>
        <Checkbox inputData="two" />
        <p>2★ & above</p>
        
        </div>

        <div style={{display : 'flex', flexDirection : 'row' }}>
        <Checkbox inputData="three" />  
      <p>3★ & above</p>
      
        </div>

        <div style={{display : 'flex', flexDirection : 'row' }}>
        <Checkbox inputData="four" />
        <p>4★ & above</p>
     
        </div>


        </div>

    );
}


export default Rating