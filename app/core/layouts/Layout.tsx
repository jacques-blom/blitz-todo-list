import {Head} from 'blitz'
import {ReactNode, Suspense} from 'react'
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
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
    )
}

export default Layout
