import React from 'react'

class LineSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: -1,
      active: 0,
    }
  }

  render() {
    return (
      <div className="flex-wrap" style={this.props.style}>
        <span style={{ color: '#555' }}>{this.props.title}</span>
        {this.props.items.map((v, i) => [
           <span className="flex-c-c" style={{ color: '#777', fontSize: 12 }}>
             {i === 0 ? "" : "|"}
           </span>,
           <span
             style={Object.assign({},
                 styles.label(this.state.hover === i),
                 this.state.active === i ? this.props.activeStyle : {}
             )}
             onMouseOver={() => this.setState({ hover: i })}
             onMouseOut={() => this.setState({ hover: -1 })}
             onClick={() => this.setState({ active: i })}>
             {v}
           </span>
        ])}
      </div>
    )
  }
}

const styles = {
  label: (hover) => ({
    margin: '0 15px',
    color: (hover ? '#444' : '#777'),
    cursor: 'pointer',
    padding: '1px 3px',
  }),
}

export default LineSelector
