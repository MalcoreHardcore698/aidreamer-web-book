import WhatIsIt from './components/stories/WhatIsIt'
import GetStarted from './components/stories/GetStarted'
import Colors from './components/stories/Colors'
import Icons from './components/stories/Icons'
import Typography from './components/stories/Typography'
import Avatar from './components/stories/Avatar'
import AsyncSection from './components/stories/AsyncSection'
import Section from './components/stories/Section'
import Slider from './components/stories/Slider'
import List from './components/stories/List'
import Carousel from './components/stories/Carousel'
import Entry from './components/stories/Entry'
import Transaction from './components/stories/Transaction'
import Skeleton from './components/stories/Skeleton'
import Notify from './components/stories/Notify'
import Modal from './components/stories/Modal'
import Alert from './components/stories/Alert'
import Message from './components/stories/Message'
import Button from './components/stories/Button'
import Input from './components/stories/Input'
import TextArea from './components/stories/TextArea'
import Checkbox from './components/stories/Checkbox'
import Select from './components/stories/Select'
import DatePicker from './components/stories/DatePicker'
import ColorPicker from './components/stories/ColorPicker'
import CounterBadge from './components/stories/CounterBadge'
import Divider from './components/stories/Divider'
import Dropdown from './components/stories/Dropdown'
import Table from './components/stories/Table'
import Search from './components/stories/Search'
import Grid from './components/stories/Grid'

import sources from './stores/sources'

/*
 *  STRUCTURE BOOK
 *
 *  - book
 *      - chapter
 *         - story
 *         - story
 *         - story
 *      - chapter
 *         - story
 * 
*/

export default [
    {
        title: 'Introduction',
        stories: [
            { title: 'What Is It', component: WhatIsIt },
            { title: 'Get Started', component: GetStarted }
        ]
    },
    {
        title: 'Components API',
        stories: [
            { title: 'Alert', component: Alert },
            { title: 'AsyncSection', component: AsyncSection },
            { title: 'Avatar', component: Avatar },
            { title: 'Button', component: Button, source: sources.button },
            { title: 'Carousel', component: Carousel },
            { title: 'Checkbox', component: Checkbox },
            { title: 'ColorPicker', component: ColorPicker },
            { title: 'CounterBadge', component: CounterBadge },
            { title: 'DatePicker', component: DatePicker },
            { title: 'Divider', component: Divider },
            { title: 'Dropdown', component: Dropdown },
            { title: 'Slider', component: Slider },
            { title: 'List', component: List },
            { title: 'Input', component: Input },
            { title: 'TextArea', component: TextArea },
            { title: 'Search', component: Search },
            { title: 'Select', component: Select },
            { title: 'Section', component: Section },
            { title: 'Message', component: Message },
            { title: 'Modal', component: Modal, source: sources.modal },
            { title: 'Notify', component: Notify },
            { title: 'Entry', component: Entry },
            { title: 'Skeleton', component: Skeleton },
            { title: 'Table', component: Table },
            { title: 'Transaction', component: Transaction },
            { title: 'Grid', component: Grid },
        ]
    },
    {
        title: 'Design Guidelines',
        stories: [
            { title: 'Colors', component: Colors },
            { title: 'Icons', component: Icons },
            { title: 'Typography', component: Typography }
        ]
    }
]