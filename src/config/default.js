/**
 * Created by demi on 11/7/15.
 */
import Loader from '../modules/Loader/facade'
import Loop from '../modules/Loop/facade'
import Controller from '../modules/Controller/facade'
import Render from '../modules/Render/facade'
import Sprite from '../modules/Sprite/facade'
import Resource from '../modules/Resource/facade'
import World from '../modules/World/facade'
import Input from '../modules/Input/facade'
import Tween from '../modules/Tween/facade'
import Audio from '../modules/Audio/facade'
import Physics from '../modules/Physics/facade'
import Text from '../modules/Text/facade'

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
  text: Text,
  physics: Physics,
  audio: Audio
}
