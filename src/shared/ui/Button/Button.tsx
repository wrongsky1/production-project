import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Button.module.scss'
 
export const enum ThemeButton {
  CLEAR = 'clear',
}

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  theme?: ThemeButton,
}
 
const Button: FC<PropsButton>= (props) => {
 
  const { 
    className, 
    children, 
    theme,
    ...otherProps 
  } = props;

  return (
    <button 
      className={classNames(cls.Button, {[cls[theme]]: true}, [className])}
      {...otherProps}  
    >
      {children}
    </button>
  )
}
 
export default Button