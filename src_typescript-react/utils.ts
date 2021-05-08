/* 
type R = { a: number }

type MyType<T> = T extends infer R ? R : never; // infer new variable R from T
type MyType2<T> = T extends R ? R : never; // compare T with above type R
type MyType3<T> = T extends R2 ? R2 : never; // error, R2 undeclared

type T1 = MyType<{b: string}> // T1 is { b: string; }
type T2 = MyType2<{b: string}> // T2 is never
 */

export type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;
