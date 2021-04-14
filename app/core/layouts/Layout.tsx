import {Head} from 'blitz'
import {ReactNode} from 'react'
import {Heading} from '../components/Heading'

type LayoutProps = {
    title?: string
    children: ReactNode
}

const Layout = ({title, children}: LayoutProps) => {
    return (
        <div className="w-full max-w-xl px-5 box-border mx-auto">
            <Head>
                <title>{title || 'BlitzTodos'}</title>
            </Head>
            <Heading>{title}</Heading>
            {children}
        </div>
    )
}

export default Layout
