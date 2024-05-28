import Display from './Display'
import { fn } from '@storybook/test'

const meta = {
    component: Display
}

export default meta

export const Default = {
    args : {
        bigText: '+',
    }
}

export const LongText = {
    args : {
        bigText: 'LOOOOOOOOOOOONG TEXT',
        maxLength : 9
    }
}

export const Filled = {
    args : {
        bigText: 'CLICK ME!',
        smallText: 'CLICK ME!',
        maxLength : 9
    }
}