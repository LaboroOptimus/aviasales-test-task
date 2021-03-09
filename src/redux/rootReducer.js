import {sortTicketsByPrice, sortTicketsByDuration, sortByOptimum} from "../utils/sort";


const initialState = {
    test: 'test',
    default: 'default',
    searchId: '',
    isTicketsLoad: false,
    tickets: [],
    ticketsCount: 5,
    error:'',
    byDuration: false,
    byPrice: true,
    byOptimum: false,
};



export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TICKETS_SUCCESS':
            return {
                ...state,
                tickets: action.payload,
                error:'',
                isTicketsLoad: true,
            };
        case 'FETCH_TICKETS_ERROR':
            return {
                ...state,
              error: action.payload
            };
        case 'FETCH_ID_SUCCESS':
            return {
                ...state,
                searchId: action.payload
            };
        case 'FETCH_ID_ERROR':
            return {
                ...state,
                /* описать ошибки */
            };
        case 'ADD_MORE_TICKETS':
            return {
                ...state,
                ticketsCount: state.ticketsCount + 5
            };
        case 'FILTER_BY_PRICE':
            return {
                ...state,
                tickets: [...sortTicketsByPrice(state.tickets)],
            };
        case 'FILTER_BY_DURATION':
            return {
                ...state,
                tickets: [...sortTicketsByDuration(state.tickets)],
            };
        case 'FILTER_BY_OPTIMUM':
            return {
                ...state,
                tickets: [...sortByOptimum(state.tickets)]
            };
        default:
            return state
    }
};

