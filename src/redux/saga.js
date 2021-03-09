import {all, call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {sortTicketsByPrice} from "../utils/sort";

const fetchSearchId = () => {
    return axios({
        method:'get',
        url: 'https://front-test.beta.aviasales.ru/search'
    })
};

const fetchTickets = (id) => {
    return axios({
        method: 'get',
        url: `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`,
    })
};

/*export function * watchFilterByDuration() {
    yield takeEvery('FILTER_BY_DURATION', workerFilterByDuration);
}

export function * workerFilterByDuration() {

}*/

export function* watchLoadTickets() {
    yield takeEvery('FETCH_ID', workerLoadTickets);
}

export function* workerLoadTickets(data) {
   try {
       const response = yield call(fetchSearchId);
       const searchId = response.data.searchId;
       yield put({type: 'FETCH_ID_SUCCESS', payload: searchId})
   }
   catch (e) {
       yield put({type: 'FETCH_ID_ERROR', payload: e})
   }
}

export function * watchFetchSearchId() {
    yield takeEvery('FETCH_ID_SUCCESS', workerFetchSearchId);
}

export function * workerFetchSearchId(data) {
    try {
        const response = yield call(() => fetchTickets(data.payload));
        // const sortByPrice = response.data.tickets.sort(function (a,b) {
        //   return a.price - b.price;
        // });

        const sortByPrice = sortTicketsByPrice(response.data.tickets);
        /* TODO: Возможно стоит это делать в отдельном экшне */

        yield put({type: 'FETCH_TICKETS_SUCCESS', payload: sortByPrice})
    }
    catch (e) {
        yield put({type: 'FETCH_TICKETS_ERROR', payload: e});
        console.log(e)
    }
}

export default function* rootSaga() {
    yield all([
        watchLoadTickets(),
        watchFetchSearchId()
    ])
}