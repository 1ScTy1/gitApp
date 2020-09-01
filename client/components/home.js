import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Repo from './repo'
import Readme from './readme'
import Header from './header'

const Home = () => {
  const { userName, repoName } = useParams()
  const [userRepo, setUserRepo] = useState([])
  const [readme, setReadme] = useState('')
  useEffect(() => {
    if (repoName !== undefined) {
      axios(`https://api.github.com/repos/${userName}/${repoName}/readme`, {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }).then(({ data }) => setReadme(data))
    }
    console.log('test')
  }, [repoName, userName])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setUserRepo(data))
    console.log('test2')
  }, [userName])
  return (
    <div>
      <Header repoName={repoName} userName={userName} />
      <div className="container m-auto">
        <Route
          exact
          path="/:username"
          component={() => <Repo userName={userName} userRepo={userRepo} />}
        />
        <Route exact path="/:username/:repoName" component={() => <Readme readme={readme} />} />
      </div>
    </div>
  )
}

export default Home
