import React from 'react'
import UserContainer from '../containers/UserContainer'
import PageContainer from '../containers/PageContainer' 

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <UserContainer />
        <PageContainer />
      </div>
    )
  }
}

export default App