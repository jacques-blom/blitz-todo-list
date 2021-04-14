import classNames from 'classnames'
import React from 'react'

export const containerStyle =
    'h-12 mb-5 flex items-center rounded-full bg-gray-700 shadow-md px-4 focus:ring outline-none'
export const textStyle = 'relative text-md color-gray-50'

type TaskType = {
    checked: boolean
    label: string
}

export const Task: React.FC<{task: TaskType; onClick: () => void}> = ({task, onClick}) => {
    return (
        <div
            onClick={onClick}
            onKeyPress={onClick}
            className={classNames(containerStyle, 'cursor-pointer')}
            role="checkbox"
            aria-checked={task.checked}
            tabIndex={0}
        >
            <div
                className={classNames(
                    'rounded-full w-5 h-5 mr-4 transition-all flex items-center justify-center bg-gray-900 cursor-pointer',
                    task.checked && 'bg-transparent',
                )}
            >
                <img
                    src="/check.svg"
                    className={classNames('transition-opacity w-3', task.checked ? 'opacity-100' : 'opacity-0')}
                    alt="check"
                />
            </div>
            <div className={textStyle}>
                {task.label}
                <div
                    className={classNames(
                        'absolute top-1/2 -left-1 -right-1 h-0.5 transform origin-left transition-transform bg-blue-400',
                        task.checked ? 'scale-x-1' : 'scale-x-0',
                    )}
                />
            </div>
        </div>
    )
}
