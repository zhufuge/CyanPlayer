import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import Recommend from './Recommend';

class TabsExampleControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'a'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        contentContainerStyle={styles.container}
        tabTemplateStyle={styles.content}
        onChange={this.handleChange}>
        <Tab label="个性推荐" value="a">
          <Recommend />
        </Tab>
        <Tab label="歌单" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
          </div>
        </Tab>
        <Tab label="排行榜" value="c">
          <div>
            <h2 style={styles.headline}>Controllable Tab C</h2>
          </div>
        </Tab>
        <Tab label="歌手" value="d">
          <div>
            <h2 style={styles.headline}>Controllable Tab D</h2>
          </div>
        </Tab>
        <Tab label="最新音乐" value="e">
          <h2 style={styles.headline}>Controllable Tab E</h2>
        </Tab>
      </Tabs>
    );
  }
}

const styles = {
  container: {
    width: 800,
  },
  content: {
    marginTop: 16,
    width: 800,
  },
};

export default TabsExampleControlled;
