import React from 'react'
import StarRating from './StarRating'
import PropTypes from 'prop-types'
export class Color extends React.Component {
    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }
    shouldComponentUpdate(nextProps) {
        const { rating } = this.props;
        return rating !== nextProps.rating
    }

    componentWillUpdate(nextProps) {
        const { title, rating } = this.props;
        this.style = null;
        this.refs.title.style.backgroundColor = "red";
        this.refs.title.style.color = "white";
        //alert(`${title}: rating ${rating} -> ${nextProps.rating}`);

    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        this.refs.title.style.backgroundColor = "";
        this.refs.title.style.color = "black"
    }

    render() {
        const { title, rating, color, onRate, onRemove } = this.props;
        return (
        <section className="color" style={this.style}>
            <h1 className="rating-h1" ref="title">{title}</h1>
            <button className="delete-button" onClick={onRemove}>X</button>
            <div className="inner-color"
                 style={{ backgroundColor: color }}>
            </div>
            <StarRating starsSelected={rating}
                        onRate={onRate} />
        </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
};
Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
};
export default Color;