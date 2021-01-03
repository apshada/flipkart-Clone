import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Data from '../../assets/Data.json'

const CardData = ({props, activeItem}) => {
    // console.log(Data.price.sort());

    const sortByPropertyLow = (property) =>{  
      return function(a,b){  
         if(a[property] > b[property])  
            return 1;  
         else if(a[property] < b[property])  
            return -1;  
     
         return 0;  
      }  
   }

   const sortByPropertyHigh = (property) =>{  
    return function(a,b){  
       if(a[property] < b[property])  
          return 1;  
       else if(a[property] > b[property])  
          return -1;  
   
       return 0;  
    }  
 }
   
    if(activeItem === 'Low to High'){
    Data.sort(sortByPropertyLow('price'))
    }
    else if(activeItem === 'High to Low'){
      Data.sort(sortByPropertyHigh('price'))
    }
    return(
    <Card.Group >
          {Data.map(item => {
            return (
              <Card key={item.id}>
                <Image src={item.img}  style={{height : 350 }} />
                <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <div style={{display : 'flex', flexDirection : "row" , justifyContent : "space-between" }}>
                <Card.Meta style={{textDecorationLine: 'line-through' }}>{item.price}</Card.Meta>
                <Card.Meta>{item.offerPrice}</Card.Meta>
                </div>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
    );
   }


export default CardData