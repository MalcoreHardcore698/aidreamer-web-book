import WhatIsIt from './components/stories/WhatIsIt'
import GetStarted from './components/stories/GetStarted'
import Colors from './components/stories/Colors'
import Icons from './components/stories/Icons'
import Typography from './components/stories/Typography'
import Accordion from './components/stories/Accordion'
import Act from './components/stories/Act'
import ActTask from './components/stories/ActTask'
import Alert from './components/stories/Alert'
import Avatar from './components/stories/Avatar'
import Button from './components/stories/Button'
import Carousel from './components/stories/Carousel'
import Checkbox from './components/stories/Checkbox'
import CheckboxAsync from './components/stories/CheckboxAsync'
import ColorPicker from './components/stories/ColorPicker'
import Column from './components/stories/Column'
import Container from './components/stories/Container'
import CounterBadge from './components/stories/CounterBadge'
import DatePicker from './components/stories/DatePicker'
import Divider from './components/stories/Divider'
import Dropdown from './components/stories/Dropdown'
import Dropzone from './components/stories/Dropzone'
import Entry from './components/stories/Entry'
import Form from './components/stories/Form'
import Frame from './components/stories/Frame'
import Grid from './components/stories/Grid'
import GridGraph from './components/stories/GridGraph'
import GridGroup from './components/stories/GridGroup'
import GridMatch from './components/stories/GridMatch'
import GridParticipant from './components/stories/GridParticipant'
import Headline from './components/stories/Headline'
import Input from './components/stories/Input'
import InputHidden from './components/stories/InputHidden'
import List from './components/stories/List'
import ListAsync from './components/stories/ListAsync'
import Message from './components/stories/Message'
import Modal from './components/stories/Modal'
import Mutation from './components/stories/Mutation'
import Navigation from './components/stories/Navigation'
import Notify from './components/stories/Notify'
import Profile from './components/stories/Profile'
import Query from './components/stories/Query'
import Radiobox from './components/stories/Radiobox'
import RadioboxAsync from './components/stories/RadioboxAsync'
import Row from './components/stories/Row'
import Search from './components/stories/Search'
import Section from './components/stories/Section'
import SectionAsync from './components/stories/SectionAsync'
import Select from './components/stories/Select'
import SelectAsync from './components/stories/SelectAsync'
import Skeleton from './components/stories/Skeleton'
import Slider from './components/stories/Slider'
import Subscription from './components/stories/Subscription'
import Table from './components/stories/Table'
import TableBody from './components/stories/TableBody'
import TableCell from './components/stories/TableCell'
import TableDescriptor from './components/stories/TableDescriptor'
import TableDescriptors from './components/stories/TableDescriptors'
import TableHeader from './components/stories/TableHeader'
import TableHeaders from './components/stories/TableHeaders'
import TableManage from './components/stories/TableManage'
import TableMutate from './components/stories/TableMutate'
import TablePagination from './components/stories/TablePagination'
import TableTrace from './components/stories/TableTrace'
import Tabs from './components/stories/Tabs'
import TextArea from './components/stories/TextArea'
import Toggler from './components/stories/Toggler'
import TogglerAsync from './components/stories/TogglerAsync'
import Transaction from './components/stories/Transaction'
import Transition from './components/stories/Transition'
import Unit from './components/stories/Unit'

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
    { title: 'ActTask', component: ActTask, source: sources.actTask },
    { title: 'Alert', component: Alert, source: sources.alert },
    { title: 'Avatar', component: Avatar, source: sources.avatar },
    { title: 'Button', component: Button, source: sources.button },
    { title: 'Carousel', component: Carousel, source: sources.carousel },
    { title: 'Checkbox', component: Checkbox, source: sources.checkbox },
    { title: 'CheckboxAsync', component: CheckboxAsync, source: sources.checkboxAsync },
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