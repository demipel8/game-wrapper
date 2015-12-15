/**
 * Created by demi on 11/7/15.
 */
import Loader from '../modules/Loader/implementation'
import Loop from '../modules/Loop/implementation'
import Controller from '../modules/Controller/implementation'
import Render from '../modules/Render/implementation'
import Sprite from '../modules/Sprite/implementation'
import Resource from '../modules/Resource/implementation'
import World from '../modules/World/implementation'
import Input from '../modules/Input/facade'
import Tween from '../modules/Tween/facade'

export default {
  loader: Loader,
  loop: Loop,
  controller: Controller,
  render: Render,
  sprite: Sprite,
  resource: Resource,
  world: World,
  input: Input,
  tween: Tween,
  text: Text
}
