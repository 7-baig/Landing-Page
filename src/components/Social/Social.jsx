import React from 'react'
import instagramVector from '../../images/Social/instagram-vector.png'
import { 
Container,
HeadingContainer, 
Heading,
ContentContainer,
VectorContainer,
Vector,
TextContainer, 
TextWrapper,
H2,
P,
ButtonWrapper,
Button,
} from './StyleSocial'

export const Social = () => (
    <Container>

        <HeadingContainer>
            <Heading>A DIFFERENT SERVICE</Heading>
        </HeadingContainer>

        <ContentContainer>
            <VectorContainer>
                <Vector src={instagramVector} />
            </VectorContainer>
            <TextContainer>         
                <TextWrapper>
                    <H2>THE STORIES, THE SCOOP AND WHAT ELSE MAKES US TICK</H2>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto voluptas harum culpa laudantium quae praesentium commodi iure debitis iste consequuntur dolorem qui quo optio mollitia labore nulla totam cumque assumenda asperiores, ipsa nisi eveniet. Quod, explicabo? Provident, ea vitae.</P>
                </TextWrapper>
                <ButtonWrapper>
                    <Button>
                        LET'S DO IT
                    </Button>
                </ButtonWrapper>
            </TextContainer>
        </ContentContainer>

    </Container>
)