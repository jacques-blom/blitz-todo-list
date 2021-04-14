import React from 'react'

export const Heading: React.FC = ({children}) => {
    return (
        <div className="font-serif text-5xl font-semibold tracking-wide text-gray-100 py-9">
            <span role="img" aria-label="Taskhero logo">
                🦸‍♂️
            </span>{' '}
            {children}
        </div>
    )
}
