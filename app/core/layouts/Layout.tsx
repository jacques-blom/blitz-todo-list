import {ReactNode} from 'react'
import {Head} from 'blitz'
import styled from 'styled-components'
import {Heading} from '../components/Heading'

type LayoutProps = {
    title?: string
    children: ReactNode
}

const Container = styled.div`
    width: 100%;
    max-width: 560px;
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
`

const Layout = ({title, children}: LayoutProps) => {
    return (
        <Container>
            <Head>
                <title>{title || 'BlitzTodos'}</title>
            </Head>
            <Heading>{title}</Heading>
            {children}
        </Container>
    )
}

export default Layout
