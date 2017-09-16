import React from 'react'

import Card from './Card'

class CardPane extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.updateDimensions.call(this)
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    this.setState({ offsetWidth: this.container.offsetWidth })
  }

  render() {
    const props = this.props
    const repeat = Math.trunc(this.state.offsetWidth /
      (props.itemStyle ? props.itemStyle.width || 183 : 183))
    return (
      <div
        ref={ref => this.container = ref}
        style={styles.container(repeat)}>
        {props.items.map(v =>
          <Card
            style={props.itemStyle}
            imgStyle={props.itemImgStyle}
            textStyle={props.itemTextStyle}
            value={v.name}
            onClick={() => props.onClickItem(v.id)}
            src={v.src}/>
        )}
      </div>
    )
  }
}

const styles = {
  container: (num=1) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `repeat(${num}, 1fr)`,
    gridGap: '20px 5px',
    margin: '20px auto 36px',
  }),
}

export default CardPane
