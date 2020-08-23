import C from './types'

export function setDocument(document) {
    return {
        type: C.SET_DOCUMENT,
        payload: {
            document
        }
    }
}

export function setDocuments(documents) {
    return {
        type: C.SET_DOCUMENTS,
        payload: {
            documents
        }
    }
}

export function setDataTable(table) {
    return {
        type: C.SET_DATA_TABLE,
        payload: {
            table
        }
    }
}