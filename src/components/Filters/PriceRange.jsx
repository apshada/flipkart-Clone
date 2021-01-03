import React from 'react'
import {Divider} from 'semantic-ui-react'

const PriceRange = () => {
    return(
        <div class="form-group">
        <Divider>
        <h2 for="formControlRange">Price Range</h2>
        </Divider><br />
        <input type="range" class="form-control-range" id="formControlRange" />
        </div>

    );

}

export default PriceRange