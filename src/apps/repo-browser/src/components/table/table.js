import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';

const createColumnData = (user) => [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <code>{text}</code>,
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Stars',
        dataIndex: 'stars',
        key: 'stars',
        sorter: (a, b) => a.stars - b.stars,
        defaultSortOrder: 'descend',
    },
    {
        title: 'Forks',
        dataIndex: 'forks',
        key: 'forks',
        sorter: (a, b) => a.forks - b.forks,
    },
    {
        title: 'Action',
        key: 'view',
        render: (text, repo) => <a href={`https://github.com/${user}/${repo.name}`} rel="noopener noreferrer" target="_blank">View</a>,
    }
];

class RepoTable extends React.Component {
    render() {
        const { repos, user, loader } = this.props;
        const filteredRepo = repos.map((repo) => {
            return {
                key: repo.id,
                name: repo.name,
                stars: repo.stargazers_count,
                forks: repo.forks
            }
        })

        return [
            <h4>{repos.length} public repositories</h4>,
            <Table
                columns={createColumnData(user)}
                loading={loader}
                dataSource={filteredRepo}
                pagination={false}
                bordered />
        ]
    }
}

const mapStateToProps = (state) => {
    return {
        repos: state.repos,
        user: state.user,
        loader: state.loader
    }
}

export default connect(mapStateToProps)(RepoTable);