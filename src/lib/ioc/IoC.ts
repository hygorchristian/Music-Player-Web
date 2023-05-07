/* eslint-disable brace-style */
/* eslint-disable  */
import {
  BindCallback,
  IocContract,
  LookupNode,
  MockCallback,
} from './IocContract'

export default class IoC<T extends Record<string, any>>
  implements IocContract<T>
{
  private bindings: Map<string, BindCallback<any, IoC<T>>> = new Map()
  private instances: Map<string, any> = new Map()
  private mocks: Map<string, MockCallback<any, IoC<T>>> = new Map()
  private useMocksFlag: boolean = false
  private boot: () => void

  constructor(boot: () => void) {
    this.boot = boot
  }

  setup() {
    this.boot()
  }

  useMock(enable: boolean = true): this {
    this.useMocksFlag = enable
    return this
  }

  bind<Binding extends keyof T>(
    binding: Binding,
    factory: BindCallback<any, this>
  ): this {
    this.bindings.set(binding as string, factory(this))
    return this
  }

  singleton<Binding extends keyof T>(
    binding: Binding,
    factory: BindCallback<any, this>
  ): this {
    const instance = this.instances.get(binding as string)
    if (!instance) {
      this.instances.set(binding as string, factory(this))
    }
    return this
  }

  mock<Namespace extends keyof T>(
    namespace: Namespace,
    factory: MockCallback<any, this>
  ): this {
    this.mocks.set(namespace as string, factory(this, null))
    return this
  }

  use<Binding extends Extract<keyof T, string>>(
    lookupNode: Binding | LookupNode<Binding>
  ): T[Binding] {
    const key =
      typeof lookupNode === 'string' ? lookupNode : lookupNode.namespace

    if (this.useMocksFlag) {
      const mock = this.mocks.get(key as string)
      if (mock) {
        const originalValue = this.getOriginalValue(key)
        return mock(this, originalValue)
      }
    }

    return this.getOriginalValue(key)
  }

  private getOriginalValue<Binding extends Extract<keyof T, string>>(
    key: Binding
  ): T[Binding] {
    const instance = this.instances.get(key as string)
    if (instance) {
      return instance
    }

    const factory = this.bindings.get(key as string)
    if (!factory) {
      throw new Error(`No binding found for key: ${key}`)
    }
    return factory(this)
  }
}
