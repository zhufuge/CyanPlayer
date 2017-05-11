import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';

class AppList extends React.Component {
  render() {
    return (
      <div>
        <List>
          <ListItem primaryText="Inbox" />
          <ListItem primaryText="Starred" />
          <ListItem primaryText="Sent mail" />
          <ListItem primaryText="Drafts" />
          <ListItem primaryText="Inbox" />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="Sent mail"  />
          <ListItem primaryText="Drafts"  />
          <ListItem primaryText="Inbox"  />
        </List>
      </div>
    );
  }
}

const styles = {
  container: {
	  borderWidth: '1px 1px medium',
	  borderStyle: 'solid solid none',
	  borderColor: 'rgb(217, 217, 217) rgb(217, 217, 217) currentcolor',
	  height: 500,
	  overflow: 'hidden',
  },
};

export default AppList;
