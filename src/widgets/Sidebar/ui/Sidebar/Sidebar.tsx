import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
 
interface PropsSidebar {
  className?: string,
}


 
const Sidebar = ({className}: PropsSidebar) => {
  const [collapsed, setCollapsed] = useState(false)
  
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}
 
export default Sidebar