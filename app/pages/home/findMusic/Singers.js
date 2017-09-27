import React from 'react'
import { connect } from 'react-redux'
import { setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import Divider from 'material-ui/Divider'
import LineSelector from './LineSelector'
import CardPane from './CardPane'
import Card from './Card'

const DEFAULT = {
  attributes: [
    { title: '语种', items: ['全部', '华语', '欧美', '日本', '韩国', '其他'] },
    { title: '分类', items: ['全部', '男歌手', '女歌手', '乐队组合'] },
    { title: '筛选', items: [
      '热门',
      ...Array(26).fill(0).map((v, i) => String.fromCodePoint(i + 0x41)),
      '#',
    ] }
  ]
}

class SingerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      singers: Array(20).fill(false).map((v, i) => i),
    }
  }

  componentWillMount() {
    Ajax('singers').then(json => json && this.setState({ singers: json.singers }))
  }

  handleSingerClick(singer) {
    this.props.setSongSheet(singer)
    this.props.setHomeSubj('6')
  }

  render() {
    return (
      <div style={styles.container}>
        {DEFAULT.attributes.map((v, i) =>
          <LineSelector
            key={'singers-selector-' + v.title + i}
            style={{ margin: '12px auto' }}
            title={v.title + '：'}
            activeStyle={{ borderRadius: 2, background: '#999', color: '#fff' }}
            items={v.items}/>
        )}
        <Divider />
        <CardPane>
          {this.state.singers.map((v, i) =>
            <Card
              key={'singers-card-' + v.id + i}
              value={v.name}
              onClick={() => this.handleSingerClick(v.id)}
              playIcon={false}
              src={v.src}/>
          )}
        </CardPane>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 24,
  },
  wrapper: {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(SingerList)
