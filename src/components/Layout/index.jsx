import Visitor from './visitors'
import Travel from './travel'
import Realization from './realization'

import { Page } from './page'

export function Layout(props) {
  if (props.parent == 'Travel') return <Travel {...props} />
  else if (props.parent == 'Realization') return <Realization {...props} />
  else if (props.parent == 'Visitor') return <Visitor {...props} />
  else return <Page {...props} />
}
