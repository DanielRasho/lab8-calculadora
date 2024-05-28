import Button from './Button'
import { fn } from '@storybook/test'

const meta = {
    component: Button
}

export default meta

export const Default = {
    args : {
        text: '+',
        onClick: fn()
    }
}

export const LongText = {
    args : {
        text: 'CLICK ME!',
        onClick: fn()
    }
}