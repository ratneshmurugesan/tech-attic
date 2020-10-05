import React from 'react';
import { Menu, Dropdown, Button, 
    // Icon 
} from 'antd';
import { connect } from 'react-redux';

import USERS from '../../utils/data.js'

import { apiRepos } from "../../api/apiRepos.js";
import { loader, fetchRepos, fetchUser } from "../../actions/actions.js";

class DropdownList extends React.Component {

    handleSelect(e) {
        console.log("Resp : " + (e.item.props.children[1]));
        this.props.onChange(e.item.props.children[1]);
    }

    render() {
        const { user } = this.props;
        const MenuOptions = () => {
            return (
                <Menu onClick={this.handleSelect.bind(this)}>
                    {
                        USERS.map((user, index) => {
                            return (<Menu.Item key={index}>{user.username}</Menu.Item>);
                        })
                    }
                </Menu>
            );
        };
        return (
            <Dropdown overlay={MenuOptions} trigger={['click']}>
                <Button style={{ marginLeft: 8 }} >
                    <div style={{ display: "flex", minWidth: 130, alignItems: "center" }}>
                        <span>{user || "Select a User"}</span>
                        <div style={{ flex: 1 }} />
                        {/* <Icon type="down" /> */}
                    </div>
                </Button>
            </Dropdown>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (user) => {
            dispatch(fetchUser(user));
            dispatch(loader(true));

            apiRepos(user)
            .then(repos => {
                dispatch(loader(false));
                dispatch(fetchRepos(repos));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownList)