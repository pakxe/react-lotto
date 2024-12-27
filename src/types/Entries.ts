type Entries<T = Record<any, any>> = T extends Record<infer Key, infer Value> ? [Key, Value][] : never[];

export default Entries;
