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
    return (
      <div
        ref={ref => this.container = ref}
        style={styles.container(Math.trunc(this.state.offsetWidth / 178))}>
        {props.Items.map((v, i) =>
          <Card
            key={'recommend-sheets-' + i + v.name}
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
