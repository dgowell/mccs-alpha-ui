import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import AboutWrapper from "../components/aboutWrapper"

import { withRedux } from '../lib/redux'
import { changeUserName } from '../actions/user'
import { getUserName } from '../selectors/user'

const IndexPage = () => {
  const dispatch = useDispatch()
  const initName = useSelector(state => getUserName(state))
  const [name, changeName] = useState(initName)

  const change = value => {
    const name = value === "JOEL" ? "BEN" : "JOEL"
    changeName(name)
    dispatch(changeUserName(name))
  }

  return (
  <div className="container">
    <AboutWrapper name={name} changeName={change}/>
    <Link href="/login">
      <a>GO TO LOGIN</a>
    </Link>
  </div>
  )
}

IndexPage.getInitialProps = ({/* store, */ pathname, query}) => {       
  // store.dispatch(dispatchFunciton) 
  return {
    custom: 'custom', // pass some custom props to component
    pathname,
    query
  }
};

export default withRedux(IndexPage)
