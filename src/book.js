import WhatIsIt from './components/stories/WhatIsIt'
import GetStarted from './components/stories/GetStarted'
import Colors from './components/stories/Colors'
import Icons from './components/stories/Icons'
import Typography from './components/stories/Typography'
import Avatar from './components/stories/Avatar'
import SectionAsync from './components/stories/SectionAsync'
import Accordion from './components/stories/Accordion'
import Section from './components/stories/Section'
import Slider from './components/stories/Slider'
import Toggler from './components/stories/Toggler'
import List from './components/stories/List'
import Entry from './components/stories/Entry'
import Transaction from './components/stories/Transaction'
import Skeleton from './components/stories/Skeleton'
import Notify from './components/stories/Notify'
import Modal from './components/stories/Modal'
import Alert from './components/stories/Alert'
import Message from './components/stories/Message'
import Button from './components/stories/Button'
import Navigation from './components/stories/Navigation'
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

const stories = [
    { title: 'Accordion', component: Accordion, source: sources.accordion },
    { title: 'Act', component: Act, source: sources.act },
    { title: 'Alert', component: Alert, source: sources.alert },
    { title: 'Avatar', component: Avatar, source: sources.avatar },
    { title: 'Button', component: Button, source: sources.button },
    { title: 'Checkbox', component: Checkbox, source: sources.checkbox },
    { title: 'CheckboxAsync', component: Checkbox, source: sources.checkboxAsync },
    { title: 'ColorPicker', component: ColorPicker, source: sources.colorPicker },
    { title: 'Column', component: Column, source: sources.column },
    { title: 'Container', component: Container, source: sources.container },
    { title: 'CounterBadge', component: CounterBadge, source: sources.counterBadge },
    { title: 'DatePicker', component: DatePicker, source: sources.datePicker },
    { title: 'Divider', component: Divider, source: sources.divider },
    { title: 'Dropdown', component: Dropdown, source: sources.dropdown },
    { title: 'Dropzone', component: Dropzone, source: sources.dropzone },
    { title: 'Entry', component: Entry, source: sources.entry },
    { title: 'Form', component: Form, source: sources.form },
    { title: 'Frame', component: Frame, source: sources.frame },
    { title: 'Grid', component: Grid, source: sources.grid },
    { title: 'GridGraph', component: GridGraph, source: sources.gridGraph },
    { title: 'GridGroup', component: GridGroup, source: sources.gridGroup },
    { title: 'GridMatch', component: GridMatch, source: sources.gridMatch },
    { title: 'GridParticipant', component: GridParticipant, source: sources.gridParticipant },
    { title: 'Headline', component: Headline, source: sources.headline },
    { title: 'Input', component: Input, source: sources.input },
    { title: 'InputHidden', component: InputHidden, source: sources.inputHidden },
    { title: 'List', component: List, source: sources.list  },
    { title: 'ListAsync', component: ListAsync, source: sources.listAsync },
    { title: 'Message', component: Message, source: sources.message  },
    { title: 'Modal', component: Modal, source: sources.modal },
    { title: 'Mutation', component: Mutation, source: sources.mutation },
    { title: 'Navigation', component: Navigation, source: sources.navigation },
    { title: 'Notify', component: Notify, source: sources.notify },
    { title: 'Profile', component: Profile, source: sources.profile },
    { title: 'Query', component: Query, source: sources.query },
    { title: 'Radiobox', component: Radiobox, source: sources.radiobox },
    { title: 'RadioboxAsync', component: RadioboxAsync, source: sources.radioboxAsync },
    { title: 'Row', component: Row, source: sources.row  },
    { title: 'Search', component: Search, source: sources.search },
    { title: 'Section', component: Section, source: sources.section },
    { title: 'SectionAsync', component: SectionAsync, source: sources.sectionAsync },
    { title: 'Select', component: Select, source: sources.select },
    { title: 'SelectAsync', component: SelectAsync, source: sources.selectAsync },
    { title: 'Skeleton', component: Skeleton, source: sources.skeleton },
    { title: 'Slider', component: Slider, source: sources.slider },
    { title: 'Subscription', component: Subscription, source: sources.subscription },
    { title: 'Table', component: Table, source: sources.table },
    { title: 'TableBody', component: TableBody, source: sources.tableBody },
    { title: 'TableCell', component: TableCell, source: sources.tableCell },
    { title: 'TableDescriptor', component: TableDescriptor, source: sources.tableDescriptor },
    { title: 'TableDescriptors', component: TableDescriptors, source: sources.tableDescriptors },
    { title: 'TableHeader', component: TableHeader, source: sources.tableHeader },
    { title: 'TableHeaders', component: TableHeaders, source: sources.tableHeaders },
    { title: 'TableManage', component: TableManage, source: sources.tableManage },
    { title: 'TableMutate', component: TableMutate, source: sources.tableMutate },
    { title: 'TablePagination', component: TablePagination, source: sources.tablePagination },
    { title: 'TableTrace', component: TableTrace, source: sources.tableTrace },
    { title: 'Tabs', component: Tabs, source: sources.tabs },
    { title: 'TextArea', component: TextArea, source: sources.textArea },
    { title: 'Toggler', component: Toggler, source: sources.toggler },
    { title: 'TogglerAsync', component: TogglerAsync, source: sources.togglerAsync },
    { title: 'Transaction', component: Transaction, source: sources.transaction },
    { title: 'Transition', component: Transition, source: sources.transition },
    { title: 'Unit', component: Unit, source: sources.unit }
]

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
        stories: stories.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
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