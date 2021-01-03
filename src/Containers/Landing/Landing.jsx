import React, { useState } from 'react'
import CardData from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar'
import { Grid, Segment, Menu } from 'semantic-ui-react'
import PriceRange from '../../components/Filters/PriceRange';
import Brand from '../../components/Filters/Brand';
import Rating from '../../components/Filters/Rating';

const Landing = () => {

      const [rating, setRating] = useState('0')
      const [seller, setSeller] = useState('Apple')
      const [activeItem,setactiveItem] = useState('Low to High')

      const handleItemClick = (e, {name}) =>  setactiveItem(name)
      console.log(activeItem)

    return(
        <div>
           <Navbar />
           <Grid>
        <Grid.Column width={4}>
          <Segment>
          <Menu fluid vertical tabular='right'>
            <Brand />
            <Rating  />
            <PriceRange />
          </Menu>
          </Segment>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
          <Menu tabular>
        <Menu.Item
          name='High to Low'
          active={activeItem === 'High to Low'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Low to High'
          active={activeItem === 'Low to High'}
          onClick={handleItemClick}
        />
      </Menu>
              <CardData active={activeItem} /> 
          </Segment>
        </Grid.Column>

      </Grid>
        </div>
    );
}

export default Landing