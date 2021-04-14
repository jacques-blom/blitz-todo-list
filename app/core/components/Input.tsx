import classNames from 'classnames'
import React from 'react'
import {containerStyle} from './Task'

type InputProps = {
    value: string
    onChange: (value: string) => void
    onPressEnter: () => void
    isLoading?: boolean
}

export const Input: React.FC<InputProps> = ({value, onChange, onPressEnter, isLoading}) => {
    return (
        <div className={classNames(containerStyle, 'focus-within:ring', isLoading && 'opacity-50 pointer-events-none')}>
            <input
                className="w-full h-full appearance-none border-0 bg-transparent search-appearance-none outline-none"
                style={{WebkitAppearance: 'textfield'}}
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
                value={value}
                onChange={({currentTarget}) => onChange(currentTarget.value)}
                onKeyUp={({key}) => {
                    if (key === 'Enter') {
                        onPressEnter()
                    }
                }}
            />
        </div>
    )
}
