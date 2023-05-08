export type BindCallback<
  ReturnValue extends any,
  Container extends IocContract
> = (container: Container) => ReturnValue

export type MockCallback<
  ReturnValue extends any,
  Container extends IocContract
> = (container: Container, originalValue: ReturnValue) => ReturnValue

export type LookupNode<Namespace extends string> = {
  namespace: Namespace
  type: 'binding' | 'alias'
}

export interface IocContract<ContainerBindings extends any = any> {
  /**
   * Enable/disable proxies. Proxies are mainly required for mocks to
   * work
   */
  useMock(enable?: boolean): this

  bind<Binding extends keyof ContainerBindings>(
    binding: Binding,
    callback: BindCallback<ContainerBindings[Binding], this>
  ): this
  bind<Binding extends string>(
    binding: Binding,
    callback: BindCallback<
      Binding extends keyof ContainerBindings
        ? ContainerBindings[Binding]
        : any,
      this
    >
  ): this

  /**
   * Same as the [[bind]] method, but registers a singleton only. Singleton's callback
   * is invoked only for the first time and then the cached value is used
   */
  singleton<Binding extends keyof ContainerBindings>(
    binding: Binding,
    callback: BindCallback<ContainerBindings[Binding], this>
  ): this
  singleton<Binding extends string>(
    binding: Binding,
    callback: BindCallback<
      Binding extends keyof ContainerBindings
        ? ContainerBindings[Binding]
        : any,
      this
    >
  ): this

  /**
   * Register a mock for a namespace. Fakes works both for "bindings" and "import aliases".
   * Fakes only work when proxies are enabled using "useProxies".
   */
  mock<Namespace extends keyof ContainerBindings>(
    namespace: Namespace,
    callback: MockCallback<ContainerBindings[Namespace], this>
  ): this
  mock<Namespace extends string>(
    namespace: Namespace,
    callback: MockCallback<
      Namespace extends keyof ContainerBindings
        ? ContainerBindings[Namespace]
        : any,
      this
    >
  ): this

  use<Binding extends Extract<keyof ContainerBindings, string>>(
    lookupNode: Binding | LookupNode<Binding>
  ): ContainerBindings[Binding]
  use<Binding extends string>(
    lookupNode: Binding | LookupNode<Binding>
  ): Binding extends keyof ContainerBindings ? ContainerBindings[Binding] : any
}
