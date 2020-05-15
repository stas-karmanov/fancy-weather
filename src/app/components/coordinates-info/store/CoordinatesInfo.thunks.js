import { geocodingService } from '../../../services';
import { setCoordinatesInfo } from './CoordinatesInfo.actions';
import { addError } from '../../errors/store/Errors.actions';

export const loadCoordinatesInfo = (city, abortController) => dispatch => {
    geocodingService
        .getGeocodingInfo(city, abortController)
        .then(info => dispatch(setCoordinatesInfo(info)))
        .catch(() => dispatch(addError('Coordinates request failed!')));
};
