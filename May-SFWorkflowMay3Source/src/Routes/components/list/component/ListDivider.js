/**
 * LastDivider List Component
 */
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
// intl messages
import IntlMessages from 'Util/IntlMessages';
// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

const ListDividerComponent = () => (
    <RctCollapsibleCard
        heading={<IntlMessages id="widgets.listDividers" />}
        fullBlock
    >
        <List className="p-0">
            <ListItem button>
                <ListItemIcon><i className="zmdi zmdi-inbox zmdi-hc-lg"></i></ListItemIcon>
                <ListItemText primary="Inbox (2)" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon><i className="zmdi zmdi-folder-star-alt zmdi-hc-lg"></i></ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon><i className="zmdi zmdi-mail-send zmdi-hc-lg"></i></ListItemIcon>
                <ListItemText primary="Send" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon><i className="zmdi zmdi-delete zmdi-hc-lg"></i></ListItemIcon>
                <ListItemText primary="Trash" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon><i className="zmdi zmdi-folder-star zmdi-hc-lg"></i></ListItemIcon>
                <ListItemText primary="Spam (5)" />
            </ListItem>
        </List>
    </RctCollapsibleCard>
)

export default ListDividerComponent;