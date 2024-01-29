// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'
import { Button } from './navbar'

const AboutSite = () => {
  return (
    <OuterContainer>
    <Container>
      <div className="written">
        <h1>Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci quod excepturi quos voluptatibus, esse illo nostrum, sint veritatis deserunt rerum consequatur inventore eaque expedita eius qui vero ab sit! Pariatur, illo quas? Quia perferendis, inventore vel soluta excepturi incidunt ab ipsum. Alias, ut consequuntur, delectus debitis natus accusamus assumenda, facilis accusantium rerum amet atque rem voluptatibus veritatis animi ipsam eaque placeat nam cupiditate explicabo! Voluptatem, nostrum maiores fugit impedit sunt iste? Velit magnam, amet maxime nam vel totam consequuntur ullam. Repellendus modi reprehenderit ut quibusdam voluptatum maiores possimus quas numquam autem temporibus. Consequatur nulla in nesciunt eius corporis nam.</p>
        <Button>Contact Us</Button>
      </div>
      <img src="/about.png" alt="" />
      
    </Container>
    
    </OuterContainer>
  )
}

export default AboutSite
const OuterContainer = styled.div`
  background-color: #f3f5fa;
;
`
const Container = styled.div`
  width: 1600px;
  margin: auto;
  display: flex;
  align-items: center;
  /* background-color: black; */
  /* color: white; */

  .written{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  img{
    width: 30%;
  }
  Button{
    width: 150px;
  }
`