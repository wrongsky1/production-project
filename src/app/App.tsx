import './styles/index.scss'

import { Link } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <AppRouter/>
    </div>
  )
}

export default App