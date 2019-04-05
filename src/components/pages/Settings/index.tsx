import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import settingStyles from './settingStyles'
import Expansions from './Expansions'

type Props = {
  classes: any
}

const Settings = React.memo(({ classes }: Props) => (
  <Expansions classes={classes} />
))

Settings.displayName = 'Settings'

export default withStyles(settingStyles)(Settings)
