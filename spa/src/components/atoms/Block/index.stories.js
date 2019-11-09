import React from 'react'
import { storiesOf } from '@storybook/react'
import Block from '.'

storiesOf('Block', module)
  .add('default', () => (
    <Block>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('reverse', () => (
    <Block reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('palette', () => (
    <Block palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('palette reverse', () => (
    <Block palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .add('palette opaque', () => (
    <Block palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .add('palette opaque reverse', () => (
    <Block palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .add('palette danger opaque', () => (
    <Block palette="danger" opaque >
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .add('palette danger opaque reverse', () => (
    <Block palette="danger" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))