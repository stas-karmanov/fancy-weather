import { geocodingService } from '../../../services';
import { setCoordinatesInfo } from './CoordinatesInfo.actions';

export const loadCoordinatesInfo = (city, abortController) => dispatch => {
    geocodingService.getGeocodingInfo(city, abortController).then(info => {
        dispatch(setCoordinatesInfo(info));
    });
};
