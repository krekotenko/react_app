import C from './constants'
import { v4 } from 'uuid'

export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString(),
        rating: 0
    });
export const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id:id,
        rating:rating
    });
export const removeColor = (id) =>
    ({
        type: C.REMOVE_COLOR,
        id: id,
    });
export const sortColorsCreators = (sortColors) =>
    ({
        type: C.SORT_COLORS,
        sortBy: sortColors,
    });
