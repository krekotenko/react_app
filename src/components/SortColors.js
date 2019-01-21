import React from 'react'
import Select, {Option, OptGroup} from 'rc-select';
import { sortColorsCreators } from '../creators';
import 'rc-select/assets/index.css';

const SortColors = ({store}) => {
    const change = value => {
        store.dispatch( sortColorsCreators(value) );
    };

    return (
        <div>
        <Select refs="sortColor" placeholder="Sort By" onChange={change}>
            <Option value="SORTED_BY_DATE">By Date</Option>
            <Option value="SORTED_BY_RATING">By Rating</Option>
            <Option value="SORTED_BY_TITLE">By Title</Option>
        </Select>
        </div>
    )
};

export default SortColors
