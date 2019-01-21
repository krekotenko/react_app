export let sortFunction = (sortMethod) => {
    switch (sortMethod) {
        case 'SORTED_BY_DATE' :
            return function (a, b) {
                    if (a.timestamp > b.timestamp) {
                        return 1;
                    }
                    if (a.timestamp < b.timestamp) {
                        return -1;
                    }
                    return 0;
                };
        case 'SORTED_BY_RATING' :
            return function (a, b) {
                    if (a.rating > b.rating) {
                        return 1;
                    }
                    if (a.rating < b.rating) {
                        return -1;
                    }
                    return 0;
                };
        case 'SORTED_BY_TITLE' :
            return function (a, b) {
                if (a.title > b.title) {
                    return 1;
                }
                if (a.title < b.title) {
                    return -1;
                }
                return 0;
            };
        default:
            return
    }

};

