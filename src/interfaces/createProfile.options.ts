/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import {ProfileOptions} from './profile.options'
import {option} from 'clime'

/**
 * Create profile options.
 */
export class CreateProfileOptions extends ProfileOptions {
 @option({
  description: '(Optional) Create an HD wallet.',
  toggle: true,
 })
 hd: boolean

 @option({
  flag: 'u',
  description: '(Optional) When saving profile, provide a Symbol Node URL. Example: http://localhost:3000',
 })
 url: string

 @option({
  flag: 'n',
  description: '(Optional) Network Type. (MAIN_NET, TEST_NET, MIJIN, MIJIN_TEST)',
 })
 network: string

 @option({
  flag: 'p',
  description: '(Optional) When saving profile, provide the password.',
 })
 password: string

 @option({
  flag: 'd',
  description: '(Optional) Set the profile as default.',
  toggle: true,
 })
 default: any

 @option({
  flag: 'g',
  description: '(Optional) Generation hash of the network. Necessary to create the profile offline.',
 })
 generationHash: string

 @option({
  flag: 'i',
  description: '(Optional) Namespace Name of the network mosaic. (eg.: symbol.xym) Necessary to create the profile offline.',
 })
 namespaceId: string

 @option({
  flag: 'v',
  description: '(Optional) Divisiblity of the network mosaic. (eg.: 6) Necessary to create the profile offline.',
 })
 divisibility: number
}
