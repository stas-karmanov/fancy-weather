import { setCoordinatesInfo } from './CoordinatesInfo.actions';

export const coordinatesInfoReducer = (state = null, action) => {
    switch (action.type) {
        case setCoordinatesInfo.type:
            return action.payload;
        default:
            return state;
    }
};
