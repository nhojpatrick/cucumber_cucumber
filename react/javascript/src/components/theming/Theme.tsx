import React from 'react'

export declare type IncludedTheme = 'dark' | 'default'

const Theme: React.FunctionComponent<{ theme?: IncludedTheme | string }> = (
  props
) => {
  return (
    <div className={'cucumber-theme--' + (props.theme || 'default')}>
      {props.children}
    </div>
  )
}

export default Theme
