import WhatIsIt from './components/stories/WhatIsIt'
import GetStarted from './components/stories/GetStarted'
import Colors from './components/stories/Colors'
import Icons from './components/stories/Icons'
import Typography from './components/stories/Typography'
import Avatar from './components/stories/Avatar'
import AsyncSection from './components/stories/AsyncSection'
import Section from './components/stories/Section'
import Slider from './components/stories/Slider'
import Toggler from './components/stories/Toggler'
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
import Radiobox from './components/stories/Radiobox'
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
            { title: 'Alert', component: Alert, source: sources.alert  },
            { title: 'AsyncSection', component: AsyncSection, source: sources.asycSection  },
            { title: 'Avatar', component: Avatar, source: sources.avatar  },
            { title: 'Button', component: Button, source: sources.button },
            { title: 'Carousel', component: Carousel, source: sources.carousel  },
            { title: 'Radiobox', component: Radiobox, source: sources.radiobox },
            { title: 'Checkbox', component: Checkbox, source: sources.checkbox  },
            { title: 'ColorPicker', component: ColorPicker, source: sources.colorPicker  },
            { title: 'CounterBadge', component: CounterBadge, source: sources.counterBadge },
            { title: 'DatePicker', component: DatePicker, source: sources.datePicker  },
            { title: 'Divider', component: Divider, source: sources.divider  },
            { title: 'Dropdown', component: Dropdown, source: sources.dropdown  },
            { title: 'Slider', component: Slider, source: sources.slider  },
            { title: 'Toggler', component: Toggler, source: sources.toggler  },
            { title: 'List', component: List, source: sources.list  },
            { title: 'Input', component: Input, source: sources.input  },
            { title: 'TextArea', component: TextArea, source: sources.textArea  },
            { title: 'Search', component: Search, source: sources.search  },
            { title: 'Select', component: Select, source: sources.select  },
            { title: 'Section', component: Section, source: sources.section  },
            { title: 'Message', component: Message, source: sources.message  },
            { title: 'Modal', component: Modal, source: sources.modal },
            { title: 'Notify', component: Notify, source: sources.notify  },
            { title: 'Entry', component: Entry, source: sources.entry  },
            { title: 'Skeleton', component: Skeleton, source: sources.skeleton  },
            { title: 'Table', component: Table, source: sources.table  },
            { title: 'Transaction', component: Transaction, source: sources.transaction  },
            { title: 'Grid', component: Grid, source: sources.grid  },
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