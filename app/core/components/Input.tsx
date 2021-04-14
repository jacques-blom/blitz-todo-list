import React from 'react'
import styled from 'styled-components'
import {Container as TaskContainer, TextStyle as TaskTextStyle} from './Task'

const InsertInput = styled.input`
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    background-color: transparent;
    outline: none;
    -webkit-appearance: textfield;
    ${TaskTextStyle};

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`

type InputProps = {
    value: string
    onChange: (value: string) => void
    onPressEnter: () => void
}

export const Input: React.FC<InputProps> = ({value, onChange, onPressEnter}) => {
    return (
        <TaskContainer>
            <InsertInput
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
                value={value}
                onChange={({currentTarget}) => onChange(currentTarget.value)}
                onKeyUp={({keyCode}) => {
                    if (keyCode === 13) {
                        onPressEnter()
                    }
                }}
            />
        </TaskContainer>
    )
}
