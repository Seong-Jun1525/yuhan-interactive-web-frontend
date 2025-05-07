/** 오자현
 * 버스정류장 리듀서
 */

import { INIT_BUS_STATION, ON_BUS_STATION_ONE, ON_BUS_STATION_TWO } from "../actions/actions";

const initialState = {
    value: false,
    busStationName: ''
    // inBusStationOne: false, // 첫 번째 버스 정류장에 있는지 여부
    // inBusStationTwo: false, // 두 번째 버스 정류장에 있는지 여부
};

export function busReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_BUS_STATION:
            return {
                ...state,
                value: false,
                busStationName: ''
            }
        case ON_BUS_STATION_ONE:
            return {
                ...state,
                value: !state.value,
                busStationName: 'busStationOne'
            }
        case ON_BUS_STATION_TWO:
            return {
                ...state,
                value: !state.value,
                busStationName: 'busStationTwo'
            }
        // case INIT_BUS_STATION:
        //     return {
        //         ...state,
        //         inBusStationOne: false,
        //         inBusStationTwo: false,
        //     };
        // case ENTER_BUS_STATION_ONE:
        //     return {
        //         ...state,
        //         inBusStationOne: true,
        //     };
        // case LEAVE_BUS_STATION_ONE:
        //     return {
        //         ...state,
        //         inBusStationOne: false,
        //     };
        // case ENTER_BUS_STATION_TWO:
        //     return {
        //         ...state,
        //         inBusStationTwo: true,
        //     };
        // case LEAVE_BUS_STATION_TWO:
        //     return {
        //         ...state,
        //         inBusStationTwo: false,
        //     };
        default:
            return state;
    }
};
