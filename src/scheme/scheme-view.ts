'use babel'
/*!
 * Atom Bugs
 * Copyright(c) 2017 Williams Medina <williams.medinaa@gmail.com>
 * MIT Licensed
 */

import {
  createGroupButtons,
  createButton,
  createIcon,
  createIconFromPath,
  createText,
  createElement,
  insertElement,
  attachEventFromObject
} from '../element/index'
import { Plugin } from '../plugin/index'
import { EventEmitter }  from 'events';

export interface SchemeOptions {
  didSelectPlugin?: Function,
  didChange?: Function
}

export class SchemeView {
  private element: HTMLElement
  private events: EventEmitter;
  private panel: any
  constructor (options: SchemeOptions) {
    this.events = new EventEmitter();
    this.element = document.createElement('atom-bugs-scheme')
    insertElement(this.element, [
      createElement('atom-bugs-scheme-content', {
        elements: [
          createElement('atom-bugs-scheme-list'),
          createElement('atom-bugs-scheme-editor')
        ]
      }),
      createElement('atom-bugs-scheme-buttons', {
        elements: [
          createButton({
            click: () => this.close()
          }, [createText('Close')])
        ]
      })
    ])
    this.panel = atom.workspace.addModalPanel({
      item: this.element,
      visible: false
    })
    attachEventFromObject(this.events, [
      'didSelectPlugin',
      'didChange'
    ], options);
  }
  open () {
    this.panel.show()
  }
  close () {
    this.panel.hide()
  }
  addPlugin (plugin: Plugin) {

  }
  getElement () {
    return this.element
  }
  destroy () {
    this.element.remove()
    this.panel.destroy()
  }
}