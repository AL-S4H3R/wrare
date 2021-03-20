import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './views/Landing'
import ConnectPage from './views/Connect'
import CreateToken from './views/CreateToken'

const App = () => {
    return(
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=B612+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Cutive+Mono&family=JetBrains+Mono&family=Share+Tech+Mono&family=Source+Code+Pro&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
            </style>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/connect' component={ConnectPage} />
                    <Route path='/create' component={CreateToken} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

const root = document.getElementById('root')
render(<App />, root)