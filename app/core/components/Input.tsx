import classNames from 'classnames'
import React from 'react'
import {containerStyle} from './Task'

type InputProps = {
    value: string
    onChange: (value: string) => void
    onPressEnter: () => void
}

export const Input: React.FC<InputProps> = ({value, onChange, onPressEnter}) => {
    return (
        <div className={classNames(containerStyle, 'focus-within:ring')}>
            <input
                className="w-full h-full appearance-none border-0 bg-transparent search-appearance-none outline-none"
                style={{WebkitAppearance: 'textfield'}}
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
                value={value}
                onChange={({currentTarget}) => onChange(currentTarget.value)}
                onKeyUp={({keyCode, key}) => {
                    console.log('key', key)
                    if (keyCode === 13) {
                        onPressEnter()
                    }
                }}
            />
        </div>
    )
}
