import React from 'react'
import slash from '../../images/triple-slash.png'
import { 
Container, 
HeadingContainer, 
Heading, 
CardsContainer, 
Card, 
ContentWrapper,
Slash,
H3, 
Paragraph, 
Button } from './StyleService'

export const Service = () => (

    <Container>
        <HeadingContainer>
            <Heading>A DIFFERENT SERVICE</Heading>
        </HeadingContainer>
        <CardsContainer>
            <Card>
                <ContentWrapper>
                    <Slash src={slash} />
                    <H3>INVESTMENTS</H3>
                    <Paragraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus velit deserunt excepturi porro quia vel accusantium est commodi pariatur dolorum?
                    </Paragraph>
                </ContentWrapper>
                <Button primary>KNOW MORE &gt;</Button>
            </Card>
            <Card>
                <ContentWrapper>
                    <Slash src={slash} />
                    <H3>SALES LEASING</H3>
                    <Paragraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus velit deserunt excepturi porro quia vel accusantium est commodi pariatur dolorum?
                    </Paragraph>
                </ContentWrapper>
                <Button>KNOW MORE &gt;</Button>
            </Card>
            <Card>
                <ContentWrapper>
                    <Slash src={slash} />
                    <H3>TENANT REPRESENTATION</H3>
                    <Paragraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus velit deserunt excepturi porro quia vel accusantium est commodi pariatur dolorum?
                    </Paragraph>
                </ContentWrapper>
                <Button>KNOW MORE &gt;</Button>
            </Card>
        </CardsContainer>    
    </Container>

)