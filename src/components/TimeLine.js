import * as d3 from "d3";
import React from 'react'
window.d3 = d3;
class Timeline extends React.Component {
    constructor({data=[]}) {
        const times = d3.extent(data.map(d => d.year))
        const range = [50, 350]
        super({data})
        this.state = {data, times, range}
    }
    componentDidMount() {
        let group
        const { data, times, range } = this.state
        const { target } = this.refs
        const scale = d3.scaleTime().domain(times).range(range)
        d3.select(target)
            .append('svg')
            .attr('height', 200)
            .attr('width', 500)
        group = d3.select(target.children[0])
            .selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr(
                'transform',
                (d, i) => 'translate(' + scale(d.year) + ', 0)'
            )
        group.append('circle')
            .attr('cy', 160)
            .attr('r', 5)
            .style('fill', 'blue')
        group.append('text')
            .text(d => d.year + " - " + d.event)
            .style('font-size', 10)
            .attr('y', 115)
            .attr('x', -95)
            .attr('transform', 'rotate(-45)')
    }
    render() {
        return (
            <div className="timeline">
                <h1>{this.props.name} Timeline</h1>
                <div ref="target"></div>
            </div>
        )
    }
}
export default Timeline;
