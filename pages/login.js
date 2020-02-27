import React from "react"
import { useSelector } from 'react-redux'
import Link from 'next/link'

import { withRedux } from '../lib/redux'
import { getUserName } from '../selectors/user'

const LoginPage = () => {
  const name = useSelector(state => getUserName(state))
  return (
  <div className="login-page">
    {name}
    <br/>
    <Link href="/index">
      <a>GO TO INDEX</a>
    </Link>
  </div>)
}

export default withRedux(LoginPage)