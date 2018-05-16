// type Unpacked<T> =
//     T extends Array<(infer U)> ? U :
//     T extends (...args: any[]) => infer U ? U :
//     T extends Promise<infer U> ? U :
//     T;

// type GetComponentProps<T> =
//   T extends new (props: infer P) => any ? P :
//   T extends (props: infer P & { children?: React.ReactNode }) => any ? P :
//   any;

declare module 'react' {
  type GetComponentProps<
    C extends StatelessComponent | ComponentClass
  > = NonNullable<C['_doNotUse_props']>;

  interface StatelessComponent<P = {}> {
    _doNotUse_props?: P;
  }
  interface ComponentClass<P = {}> {
    _doNotUse_props?: P;
  }
}
