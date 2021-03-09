const isNightFlight = (date) => {
    const h = new Date(date).getUTCHours();
    return h >= 0 && h <= 8 ? 1 : 0;
};

export function sortTicketsByPrice(array) {
    return array.sort(function (a,b) {
       return a.price - b.price
    })
}

export function sortTicketsByDuration(array) {
    return array.sort(function (a,b) {
        return a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration;
    })
}

export function sortByOptimum(array) {
    return array.sort(function (a,b) {
        const isNightFlightToA = isNightFlight(a.segments[0].date);
        const isNightFlightFromA = isNightFlight(a.segments[1].date);
        const isNightFlightToB = isNightFlight(b.segments[0].date);
        const isNightFlightFromB = isNightFlight(b.segments[1].date);
        // TODO: добавить кол-во пересадок
        const scoreA = a.price * 1 + (a.segments[0].duration + a.segments[1].duration) * 10 + isNightFlightToA * 5 + isNightFlightFromA * 5;
        const scoreB = b.price * 1 + (b.segments[0].duration + b.segments[1].duration) * 10 + isNightFlightToB * 5 + isNightFlightFromB * 5;

        if(scoreA < scoreB){
            return -1
        }
        else {
            return 1
        }

    })
}

// F = min(price * 1 + duration * 10 + isNightTo * 10 + isNightFrom * 10 + transfer * 5)


// interface Ticket {
//     // Цена в рублях
//     price: number
//     // Код авиакомпании (iata)
//     carrier: string
//     // Массив перелётов.
//     // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
//     segments: [
//         {
//             // Код города (iata)
//             origin: string
//             // Код города (iata)
//             destination: string
//             // Дата и время вылета туда
//             date: string
//             // Массив кодов (iata) городов с пересадками
//             stops: string[]
//             // Общее время перелёта в минутах
//             duration: number
//         },
//         {
//             // Код города (iata)
//             origin: string
//             // Код города (iata)
//             destination: string
//             // Дата и время вылета обратно
//             date: string
//             // Массив кодов (iata) городов с пересадками
//             stops: string[]
//             // Общее время перелёта в минутах
//             duration: number
//         }
//     ]
// }