import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

class TabsExampleControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}>
        <Tab label="Tab A" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
          </div>
        </Tab>
        <Tab label="Tab B" value="c">
          <div>
            <h2 style={styles.headline}>Controllable Tab C</h2>
          </div>
        </Tab>
        <Tab label="Tab B" value="d">
          <div>
            <h2 style={styles.headline}>Controllable Tab D</h2>
          </div>
        </Tab>

      </Tabs>
    );
  }
}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default TabsExampleControlled;
