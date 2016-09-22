// Type definitions for [LIBRARY NAME]
// Project: [LIBRARY URL]
// Definitions by: [AUTHOR NAME] <[AUTHOR URL]>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module Cerebral {
  export interface Controller {
    addModules ( opts: any )
    addSignals ( opts: any )
    getSignals ( path?: string ) : any
    addServices ( opts: any )
    once ( event: string, clbk: any )
    on: any
  }

}

declare module 'cerebral' {
  export function Controller ( model: any ): Cerebral.Controller
  export function Computed ( paths: any, func: any ): any
}

declare module 'cerebral-module-devtools' {
  interface Devtools {
    (): any
  }
  const module: Devtools
  export = module
}

declare module 'cerebral-module-http' {
  interface Http {
    (): any
  }
  const module: Http
  export = module
}

declare module 'cerebral-module-router' {
  const module: any
  export = module
}

declare module 'cerebral-model-baobab' {
  interface Model {
    ( initState: Object ): any
    monkey: any
  }
  const module: Model
  export = module
}

declare module "cerebral/operators" {
    export function set(path: string, value: any): any;
    export function copy(dest: string, source: any): any;
    export function toggle(path: string): any;
    export function when(conditionPath: string ): any;
}

declare module "cerebral/models/immutable" {
    interface ImmutableModel {
      ( initialState: any ): any
    }
    const module: ImmutableModel
    export = module
    //export default function (initialState: any): any;
}


declare module 'cerebral-view-snabbdom' {
  interface CreateElement {
    ( tag: string, ...args ): any
  }
  interface ComponentParams {
    state: any
    signals: any
    props: any
    children: any[]
  }
  interface ComponentClbk {
    ( options: ComponentParams ): void
  }
  interface ComponentType {
    DOM: CreateElement
    DOMh: CreateElement
    createElement: CreateElement
    ( opts: Object, clbk: ComponentClbk ): any
    ( clbk: ComponentClbk ): any
  }
  interface renderType {
    ( clbk: () => any
    , domElement:HTMLElement
    , controller: Cerebral.Controller ): void
  }
  export const Component: ComponentType
  export const render: renderType
}

declare module 'cerebral-view-inferno' {
  export const Container: any
  export const connect: any
}
