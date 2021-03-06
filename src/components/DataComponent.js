import React from 'react'
const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
        }
        componentWillMount() {
            this.setState({loading:true});
            fetch(url+`?results=${this.props.count}`)
                .then(response => response.json())
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }))
        }
        render() {
            return (
                <div className="data-component">
                    {(this.state.loading) ?
                        <div>Loading...</div> :
                        <ComposedComponent {...this.state} />}
                </div>
            )
        }
    }
    export default DataComponent;