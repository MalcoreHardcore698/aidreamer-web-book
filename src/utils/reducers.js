import { combineReducers } from 'redux'
import C from './types'

export function documentReducer(state={}, { type, payload }) {
    switch (type) {
        case C.SET_DOCUMENT:
            return payload.document
        default:
            return state
    }
}

export function documentsReducer(state={}, { type, payload }) {
    switch (type) {
        case C.SET_DOCUMENTS:
            return payload.documents
        default:
            return state
    }
}

export function tableReducer(state=[], { type, payload }) {
    switch(type) {
        case C.SET_DATA_TABLE:
            return payload.table
        default:
            return state
    }
}

export const reducers = combineReducers({
    document: documentReducer,
    documents: documentsReducer,
    table: tableReducer,
})