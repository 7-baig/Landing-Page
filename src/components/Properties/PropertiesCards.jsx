import React from 'react'
import { CardsData } from './CardsData'
import { CardsContainer, Container, Card } from './StylePropertiesCards'

export const PropertiesCards = () => (

    <Container>
        <CardsContainer>
            {
                CardsData.map(card => (
                    <Card
                        primary={card.primary}
                        secondary={card.secondary}
                        key={card.id}
                        imgUrl={card.imgUrl}
                    >
                        {card.carousel}
                    </Card>
                ))
            }
        </CardsContainer>
    </Container>
)
