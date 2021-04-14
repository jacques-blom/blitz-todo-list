import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
`

const TextContainer = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 47px;
    font-weight: 600;
    letter-spacing: 2px;
    color: ${(props) => props.theme.text};
`

export const Heading: React.FC = ({children}) => {
    return (
        <Container>
            <TextContainer>
                <span role="img" aria-label="Taskhero logo">
                    🦸‍♂️
                </span>{' '}
                {children}
            </TextContainer>
        </Container>
    )
}
