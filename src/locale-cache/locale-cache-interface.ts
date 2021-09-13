export interface IResource {
  readonly [key: string]: string | IResource;
}

export interface INestedResource {
  [key: string]: IResource;
}
