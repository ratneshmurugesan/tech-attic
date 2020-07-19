import React from 'react';


import DropdownList from '../components/dropdown/dropdown.js'
import RepoTable from '../components/table/table.js'

import { Layout } from "antd";
const { Content } = Layout;


class App extends React.Component {
  render() {
    return (
      <Content style={{ margin: "30px auto", maxWidth: 700 }}>
        {/* <h1 style={{ textAlign: "center", marginBottom: 50 }}> Github Repository Browser </h1> */}
        <DropdownList />
        <div style={{ marginTop: 50 }}> <RepoTable /> </div>
      </Content>
    )
  }
}

export default (App);