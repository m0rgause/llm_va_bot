
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model kelas
 * 
 */
export type kelas = $Result.DefaultSelection<Prisma.$kelasPayload>
/**
 * Model semester
 * 
 */
export type semester = $Result.DefaultSelection<Prisma.$semesterPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model document
 * 
 */
export type document = $Result.DefaultSelection<Prisma.$documentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const kelas_hari: {
  senin: 'senin',
  selasa: 'selasa',
  rabu: 'rabu',
  kamis: 'kamis',
  jumat: 'jumat',
  sabtu: 'sabtu',
  minggu: 'minggu'
};

export type kelas_hari = (typeof kelas_hari)[keyof typeof kelas_hari]


export const user_role: {
  administrator: 'administrator',
  user: 'user'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type kelas_hari = $Enums.kelas_hari

export const kelas_hari: typeof $Enums.kelas_hari

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Kelas
 * const kelas = await prisma.kelas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Kelas
   * const kelas = await prisma.kelas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.kelas`: Exposes CRUD operations for the **kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.kelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.semester`: Exposes CRUD operations for the **semester** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Semesters
    * const semesters = await prisma.semester.findMany()
    * ```
    */
  get semester(): Prisma.semesterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.documentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    kelas: 'kelas',
    semester: 'semester',
    user: 'user',
    document: 'document'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "kelas" | "semester" | "user" | "document"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      kelas: {
        payload: Prisma.$kelasPayload<ExtArgs>
        fields: Prisma.kelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          findFirst: {
            args: Prisma.kelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          findMany: {
            args: Prisma.kelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>[]
          }
          create: {
            args: Prisma.kelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          createMany: {
            args: Prisma.kelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>[]
          }
          delete: {
            args: Prisma.kelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          update: {
            args: Prisma.kelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          deleteMany: {
            args: Prisma.kelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>[]
          }
          upsert: {
            args: Prisma.kelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.kelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.kelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
          }
        }
      }
      semester: {
        payload: Prisma.$semesterPayload<ExtArgs>
        fields: Prisma.semesterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.semesterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.semesterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>
          }
          findFirst: {
            args: Prisma.semesterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.semesterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>
          }
          findMany: {
            args: Prisma.semesterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>[]
          }
          create: {
            args: Prisma.semesterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>
          }
          createMany: {
            args: Prisma.semesterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.semesterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>[]
          }
          delete: {
            args: Prisma.semesterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>
          }
          update: {
            args: Prisma.semesterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>
          }
          deleteMany: {
            args: Prisma.semesterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.semesterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.semesterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>[]
          }
          upsert: {
            args: Prisma.semesterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>
          }
          aggregate: {
            args: Prisma.SemesterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSemester>
          }
          groupBy: {
            args: Prisma.semesterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SemesterGroupByOutputType>[]
          }
          count: {
            args: Prisma.semesterCountArgs<ExtArgs>
            result: $Utils.Optional<SemesterCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      document: {
        payload: Prisma.$documentPayload<ExtArgs>
        fields: Prisma.documentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          findFirst: {
            args: Prisma.documentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          findMany: {
            args: Prisma.documentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>[]
          }
          create: {
            args: Prisma.documentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          createMany: {
            args: Prisma.documentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.documentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>[]
          }
          delete: {
            args: Prisma.documentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          update: {
            args: Prisma.documentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          deleteMany: {
            args: Prisma.documentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.documentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>[]
          }
          upsert: {
            args: Prisma.documentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.documentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    kelas?: kelasOmit
    semester?: semesterOmit
    user?: userOmit
    document?: documentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SemesterCountOutputType
   */

  export type SemesterCountOutputType = {
    kelas: number
  }

  export type SemesterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | SemesterCountOutputTypeCountKelasArgs
  }

  // Custom InputTypes
  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterCountOutputType
     */
    select?: SemesterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountKelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kelasWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    document: number
    semester: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UserCountOutputTypeCountDocumentArgs
    semester?: boolean | UserCountOutputTypeCountSemesterArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSemesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: semesterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasMinAggregateOutputType = {
    id: string | null
    semester_id: string | null
    mata_kuliah: string | null
    hari: $Enums.kelas_hari | null
    waktu_mulai: Date | null
    waktu_selesai: Date | null
    ruang: string | null
    dosen: string | null
    kelas: string | null
    kode: string | null
  }

  export type KelasMaxAggregateOutputType = {
    id: string | null
    semester_id: string | null
    mata_kuliah: string | null
    hari: $Enums.kelas_hari | null
    waktu_mulai: Date | null
    waktu_selesai: Date | null
    ruang: string | null
    dosen: string | null
    kelas: string | null
    kode: string | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    semester_id: number
    mata_kuliah: number
    hari: number
    waktu_mulai: number
    waktu_selesai: number
    ruang: number
    dosen: number
    kelas: number
    kode: number
    _all: number
  }


  export type KelasMinAggregateInputType = {
    id?: true
    semester_id?: true
    mata_kuliah?: true
    hari?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruang?: true
    dosen?: true
    kelas?: true
    kode?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    semester_id?: true
    mata_kuliah?: true
    hari?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruang?: true
    dosen?: true
    kelas?: true
    kode?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    semester_id?: true
    mata_kuliah?: true
    hari?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruang?: true
    dosen?: true
    kelas?: true
    kode?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelas to aggregate.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type kelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kelasWhereInput
    orderBy?: kelasOrderByWithAggregationInput | kelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: kelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id: string
    semester_id: string
    mata_kuliah: string
    hari: $Enums.kelas_hari
    waktu_mulai: Date
    waktu_selesai: Date
    ruang: string
    dosen: string
    kelas: string
    kode: string
    _count: KelasCountAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends kelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type kelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    semester_id?: boolean
    mata_kuliah?: boolean
    hari?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruang?: boolean
    dosen?: boolean
    kelas?: boolean
    kode?: boolean
    semester?: boolean | semesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type kelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    semester_id?: boolean
    mata_kuliah?: boolean
    hari?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruang?: boolean
    dosen?: boolean
    kelas?: boolean
    kode?: boolean
    semester?: boolean | semesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type kelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    semester_id?: boolean
    mata_kuliah?: boolean
    hari?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruang?: boolean
    dosen?: boolean
    kelas?: boolean
    kode?: boolean
    semester?: boolean | semesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type kelasSelectScalar = {
    id?: boolean
    semester_id?: boolean
    mata_kuliah?: boolean
    hari?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruang?: boolean
    dosen?: boolean
    kelas?: boolean
    kode?: boolean
  }

  export type kelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "semester_id" | "mata_kuliah" | "hari" | "waktu_mulai" | "waktu_selesai" | "ruang" | "dosen" | "kelas" | "kode", ExtArgs["result"]["kelas"]>
  export type kelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semester?: boolean | semesterDefaultArgs<ExtArgs>
  }
  export type kelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semester?: boolean | semesterDefaultArgs<ExtArgs>
  }
  export type kelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semester?: boolean | semesterDefaultArgs<ExtArgs>
  }

  export type $kelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kelas"
    objects: {
      semester: Prisma.$semesterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      semester_id: string
      mata_kuliah: string
      hari: $Enums.kelas_hari
      waktu_mulai: Date
      waktu_selesai: Date
      ruang: string
      dosen: string
      kelas: string
      kode: string
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type kelasGetPayload<S extends boolean | null | undefined | kelasDefaultArgs> = $Result.GetResult<Prisma.$kelasPayload, S>

  type kelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface kelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kelas'], meta: { name: 'kelas' } }
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {kelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kelasFindUniqueArgs>(args: SelectSubset<T, kelasFindUniqueArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kelasFindUniqueOrThrowArgs>(args: SelectSubset<T, kelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kelasFindFirstArgs>(args?: SelectSubset<T, kelasFindFirstArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kelasFindFirstOrThrowArgs>(args?: SelectSubset<T, kelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     * 
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelasWithIdOnly = await prisma.kelas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends kelasFindManyArgs>(args?: SelectSubset<T, kelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas.
     * @param {kelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     * 
     */
    create<T extends kelasCreateArgs>(args: SelectSubset<T, kelasCreateArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas.
     * @param {kelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kelasCreateManyArgs>(args?: SelectSubset<T, kelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelas and returns the data saved in the database.
     * @param {kelasCreateManyAndReturnArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kelasCreateManyAndReturnArgs>(args?: SelectSubset<T, kelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelas.
     * @param {kelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     * 
     */
    delete<T extends kelasDeleteArgs>(args: SelectSubset<T, kelasDeleteArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas.
     * @param {kelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kelasUpdateArgs>(args: SelectSubset<T, kelasUpdateArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas.
     * @param {kelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kelasDeleteManyArgs>(args?: SelectSubset<T, kelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kelasUpdateManyArgs>(args: SelectSubset<T, kelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas and returns the data updated in the database.
     * @param {kelasUpdateManyAndReturnArgs} args - Arguments to update many Kelas.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends kelasUpdateManyAndReturnArgs>(args: SelectSubset<T, kelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelas.
     * @param {kelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends kelasUpsertArgs>(args: SelectSubset<T, kelasUpsertArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends kelasCountArgs>(
      args?: Subset<T, kelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends kelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kelasGroupByArgs['orderBy'] }
        : { orderBy?: kelasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, kelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kelas model
   */
  readonly fields: kelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    semester<T extends semesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, semesterDefaultArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kelas model
   */
  interface kelasFieldRefs {
    readonly id: FieldRef<"kelas", 'String'>
    readonly semester_id: FieldRef<"kelas", 'String'>
    readonly mata_kuliah: FieldRef<"kelas", 'String'>
    readonly hari: FieldRef<"kelas", 'kelas_hari'>
    readonly waktu_mulai: FieldRef<"kelas", 'DateTime'>
    readonly waktu_selesai: FieldRef<"kelas", 'DateTime'>
    readonly ruang: FieldRef<"kelas", 'String'>
    readonly dosen: FieldRef<"kelas", 'String'>
    readonly kelas: FieldRef<"kelas", 'String'>
    readonly kode: FieldRef<"kelas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * kelas findUnique
   */
  export type kelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas findUniqueOrThrow
   */
  export type kelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas findFirst
   */
  export type kelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas findFirstOrThrow
   */
  export type kelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas findMany
   */
  export type kelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas create
   */
  export type kelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The data needed to create a kelas.
     */
    data: XOR<kelasCreateInput, kelasUncheckedCreateInput>
  }

  /**
   * kelas createMany
   */
  export type kelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kelas.
     */
    data: kelasCreateManyInput | kelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kelas createManyAndReturn
   */
  export type kelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * The data used to create many kelas.
     */
    data: kelasCreateManyInput | kelasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * kelas update
   */
  export type kelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The data needed to update a kelas.
     */
    data: XOR<kelasUpdateInput, kelasUncheckedUpdateInput>
    /**
     * Choose, which kelas to update.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas updateMany
   */
  export type kelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kelas.
     */
    data: XOR<kelasUpdateManyMutationInput, kelasUncheckedUpdateManyInput>
    /**
     * Filter which kelas to update
     */
    where?: kelasWhereInput
    /**
     * Limit how many kelas to update.
     */
    limit?: number
  }

  /**
   * kelas updateManyAndReturn
   */
  export type kelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * The data used to update kelas.
     */
    data: XOR<kelasUpdateManyMutationInput, kelasUncheckedUpdateManyInput>
    /**
     * Filter which kelas to update
     */
    where?: kelasWhereInput
    /**
     * Limit how many kelas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * kelas upsert
   */
  export type kelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The filter to search for the kelas to update in case it exists.
     */
    where: kelasWhereUniqueInput
    /**
     * In case the kelas found by the `where` argument doesn't exist, create a new kelas with this data.
     */
    create: XOR<kelasCreateInput, kelasUncheckedCreateInput>
    /**
     * In case the kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kelasUpdateInput, kelasUncheckedUpdateInput>
  }

  /**
   * kelas delete
   */
  export type kelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter which kelas to delete.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas deleteMany
   */
  export type kelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelas to delete
     */
    where?: kelasWhereInput
    /**
     * Limit how many kelas to delete.
     */
    limit?: number
  }

  /**
   * kelas without action
   */
  export type kelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
  }


  /**
   * Model semester
   */

  export type AggregateSemester = {
    _count: SemesterCountAggregateOutputType | null
    _avg: SemesterAvgAggregateOutputType | null
    _sum: SemesterSumAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  export type SemesterAvgAggregateOutputType = {
    nama: number | null
  }

  export type SemesterSumAggregateOutputType = {
    nama: number | null
  }

  export type SemesterMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    nama: number | null
  }

  export type SemesterMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    nama: number | null
  }

  export type SemesterCountAggregateOutputType = {
    id: number
    user_id: number
    nama: number
    _all: number
  }


  export type SemesterAvgAggregateInputType = {
    nama?: true
  }

  export type SemesterSumAggregateInputType = {
    nama?: true
  }

  export type SemesterMinAggregateInputType = {
    id?: true
    user_id?: true
    nama?: true
  }

  export type SemesterMaxAggregateInputType = {
    id?: true
    user_id?: true
    nama?: true
  }

  export type SemesterCountAggregateInputType = {
    id?: true
    user_id?: true
    nama?: true
    _all?: true
  }

  export type SemesterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which semester to aggregate.
     */
    where?: semesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semesters to fetch.
     */
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: semesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned semesters
    **/
    _count?: true | SemesterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SemesterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SemesterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemesterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemesterMaxAggregateInputType
  }

  export type GetSemesterAggregateType<T extends SemesterAggregateArgs> = {
        [P in keyof T & keyof AggregateSemester]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemester[P]>
      : GetScalarType<T[P], AggregateSemester[P]>
  }




  export type semesterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: semesterWhereInput
    orderBy?: semesterOrderByWithAggregationInput | semesterOrderByWithAggregationInput[]
    by: SemesterScalarFieldEnum[] | SemesterScalarFieldEnum
    having?: semesterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemesterCountAggregateInputType | true
    _avg?: SemesterAvgAggregateInputType
    _sum?: SemesterSumAggregateInputType
    _min?: SemesterMinAggregateInputType
    _max?: SemesterMaxAggregateInputType
  }

  export type SemesterGroupByOutputType = {
    id: string
    user_id: string
    nama: number
    _count: SemesterCountAggregateOutputType | null
    _avg: SemesterAvgAggregateOutputType | null
    _sum: SemesterSumAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  type GetSemesterGroupByPayload<T extends semesterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemesterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemesterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemesterGroupByOutputType[P]>
            : GetScalarType<T[P], SemesterGroupByOutputType[P]>
        }
      >
    >


  export type semesterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nama?: boolean
    kelas?: boolean | semester$kelasArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type semesterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nama?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type semesterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nama?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type semesterSelectScalar = {
    id?: boolean
    user_id?: boolean
    nama?: boolean
  }

  export type semesterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "nama", ExtArgs["result"]["semester"]>
  export type semesterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | semester$kelasArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type semesterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type semesterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $semesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "semester"
    objects: {
      kelas: Prisma.$kelasPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      nama: number
    }, ExtArgs["result"]["semester"]>
    composites: {}
  }

  type semesterGetPayload<S extends boolean | null | undefined | semesterDefaultArgs> = $Result.GetResult<Prisma.$semesterPayload, S>

  type semesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<semesterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SemesterCountAggregateInputType | true
    }

  export interface semesterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['semester'], meta: { name: 'semester' } }
    /**
     * Find zero or one Semester that matches the filter.
     * @param {semesterFindUniqueArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends semesterFindUniqueArgs>(args: SelectSubset<T, semesterFindUniqueArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Semester that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {semesterFindUniqueOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends semesterFindUniqueOrThrowArgs>(args: SelectSubset<T, semesterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterFindFirstArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends semesterFindFirstArgs>(args?: SelectSubset<T, semesterFindFirstArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterFindFirstOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends semesterFindFirstOrThrowArgs>(args?: SelectSubset<T, semesterFindFirstOrThrowArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Semesters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semesters
     * const semesters = await prisma.semester.findMany()
     * 
     * // Get first 10 Semesters
     * const semesters = await prisma.semester.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const semesterWithIdOnly = await prisma.semester.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends semesterFindManyArgs>(args?: SelectSubset<T, semesterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Semester.
     * @param {semesterCreateArgs} args - Arguments to create a Semester.
     * @example
     * // Create one Semester
     * const Semester = await prisma.semester.create({
     *   data: {
     *     // ... data to create a Semester
     *   }
     * })
     * 
     */
    create<T extends semesterCreateArgs>(args: SelectSubset<T, semesterCreateArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Semesters.
     * @param {semesterCreateManyArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends semesterCreateManyArgs>(args?: SelectSubset<T, semesterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Semesters and returns the data saved in the database.
     * @param {semesterCreateManyAndReturnArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Semesters and only return the `id`
     * const semesterWithIdOnly = await prisma.semester.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends semesterCreateManyAndReturnArgs>(args?: SelectSubset<T, semesterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Semester.
     * @param {semesterDeleteArgs} args - Arguments to delete one Semester.
     * @example
     * // Delete one Semester
     * const Semester = await prisma.semester.delete({
     *   where: {
     *     // ... filter to delete one Semester
     *   }
     * })
     * 
     */
    delete<T extends semesterDeleteArgs>(args: SelectSubset<T, semesterDeleteArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Semester.
     * @param {semesterUpdateArgs} args - Arguments to update one Semester.
     * @example
     * // Update one Semester
     * const semester = await prisma.semester.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends semesterUpdateArgs>(args: SelectSubset<T, semesterUpdateArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Semesters.
     * @param {semesterDeleteManyArgs} args - Arguments to filter Semesters to delete.
     * @example
     * // Delete a few Semesters
     * const { count } = await prisma.semester.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends semesterDeleteManyArgs>(args?: SelectSubset<T, semesterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends semesterUpdateManyArgs>(args: SelectSubset<T, semesterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters and returns the data updated in the database.
     * @param {semesterUpdateManyAndReturnArgs} args - Arguments to update many Semesters.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Semesters and only return the `id`
     * const semesterWithIdOnly = await prisma.semester.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends semesterUpdateManyAndReturnArgs>(args: SelectSubset<T, semesterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Semester.
     * @param {semesterUpsertArgs} args - Arguments to update or create a Semester.
     * @example
     * // Update or create a Semester
     * const semester = await prisma.semester.upsert({
     *   create: {
     *     // ... data to create a Semester
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semester we want to update
     *   }
     * })
     */
    upsert<T extends semesterUpsertArgs>(args: SelectSubset<T, semesterUpsertArgs<ExtArgs>>): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterCountArgs} args - Arguments to filter Semesters to count.
     * @example
     * // Count the number of Semesters
     * const count = await prisma.semester.count({
     *   where: {
     *     // ... the filter for the Semesters we want to count
     *   }
     * })
    **/
    count<T extends semesterCountArgs>(
      args?: Subset<T, semesterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemesterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SemesterAggregateArgs>(args: Subset<T, SemesterAggregateArgs>): Prisma.PrismaPromise<GetSemesterAggregateType<T>>

    /**
     * Group by Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends semesterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: semesterGroupByArgs['orderBy'] }
        : { orderBy?: semesterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, semesterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemesterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the semester model
   */
  readonly fields: semesterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for semester.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__semesterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends semester$kelasArgs<ExtArgs> = {}>(args?: Subset<T, semester$kelasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the semester model
   */
  interface semesterFieldRefs {
    readonly id: FieldRef<"semester", 'String'>
    readonly user_id: FieldRef<"semester", 'String'>
    readonly nama: FieldRef<"semester", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * semester findUnique
   */
  export type semesterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * Filter, which semester to fetch.
     */
    where: semesterWhereUniqueInput
  }

  /**
   * semester findUniqueOrThrow
   */
  export type semesterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * Filter, which semester to fetch.
     */
    where: semesterWhereUniqueInput
  }

  /**
   * semester findFirst
   */
  export type semesterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * Filter, which semester to fetch.
     */
    where?: semesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semesters to fetch.
     */
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for semesters.
     */
    cursor?: semesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * semester findFirstOrThrow
   */
  export type semesterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * Filter, which semester to fetch.
     */
    where?: semesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semesters to fetch.
     */
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for semesters.
     */
    cursor?: semesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * semester findMany
   */
  export type semesterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * Filter, which semesters to fetch.
     */
    where?: semesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semesters to fetch.
     */
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing semesters.
     */
    cursor?: semesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semesters.
     */
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * semester create
   */
  export type semesterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * The data needed to create a semester.
     */
    data: XOR<semesterCreateInput, semesterUncheckedCreateInput>
  }

  /**
   * semester createMany
   */
  export type semesterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many semesters.
     */
    data: semesterCreateManyInput | semesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * semester createManyAndReturn
   */
  export type semesterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * The data used to create many semesters.
     */
    data: semesterCreateManyInput | semesterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * semester update
   */
  export type semesterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * The data needed to update a semester.
     */
    data: XOR<semesterUpdateInput, semesterUncheckedUpdateInput>
    /**
     * Choose, which semester to update.
     */
    where: semesterWhereUniqueInput
  }

  /**
   * semester updateMany
   */
  export type semesterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update semesters.
     */
    data: XOR<semesterUpdateManyMutationInput, semesterUncheckedUpdateManyInput>
    /**
     * Filter which semesters to update
     */
    where?: semesterWhereInput
    /**
     * Limit how many semesters to update.
     */
    limit?: number
  }

  /**
   * semester updateManyAndReturn
   */
  export type semesterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * The data used to update semesters.
     */
    data: XOR<semesterUpdateManyMutationInput, semesterUncheckedUpdateManyInput>
    /**
     * Filter which semesters to update
     */
    where?: semesterWhereInput
    /**
     * Limit how many semesters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * semester upsert
   */
  export type semesterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * The filter to search for the semester to update in case it exists.
     */
    where: semesterWhereUniqueInput
    /**
     * In case the semester found by the `where` argument doesn't exist, create a new semester with this data.
     */
    create: XOR<semesterCreateInput, semesterUncheckedCreateInput>
    /**
     * In case the semester was found with the provided `where` argument, update it with this data.
     */
    update: XOR<semesterUpdateInput, semesterUncheckedUpdateInput>
  }

  /**
   * semester delete
   */
  export type semesterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    /**
     * Filter which semester to delete.
     */
    where: semesterWhereUniqueInput
  }

  /**
   * semester deleteMany
   */
  export type semesterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which semesters to delete
     */
    where?: semesterWhereInput
    /**
     * Limit how many semesters to delete.
     */
    limit?: number
  }

  /**
   * semester.kelas
   */
  export type semester$kelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    where?: kelasWhereInput
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    cursor?: kelasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * semester without action
   */
  export type semesterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    no_whatsapp: string | null
    role: $Enums.user_role | null
    is_notify: boolean | null
    is_saved: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    no_whatsapp: string | null
    role: $Enums.user_role | null
    is_notify: boolean | null
    is_saved: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    no_whatsapp: number
    role: number
    is_notify: number
    is_saved: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    no_whatsapp?: true
    role?: true
    is_notify?: true
    is_saved?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    no_whatsapp?: true
    role?: true
    is_notify?: true
    is_saved?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    no_whatsapp?: true
    role?: true
    is_notify?: true
    is_saved?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    email: string
    password: string
    no_whatsapp: string | null
    role: $Enums.user_role
    is_notify: boolean
    is_saved: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    no_whatsapp?: boolean
    role?: boolean
    is_notify?: boolean
    is_saved?: boolean
    document?: boolean | user$documentArgs<ExtArgs>
    semester?: boolean | user$semesterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    no_whatsapp?: boolean
    role?: boolean
    is_notify?: boolean
    is_saved?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    no_whatsapp?: boolean
    role?: boolean
    is_notify?: boolean
    is_saved?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    no_whatsapp?: boolean
    role?: boolean
    is_notify?: boolean
    is_saved?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password" | "no_whatsapp" | "role" | "is_notify" | "is_saved", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | user$documentArgs<ExtArgs>
    semester?: boolean | user$semesterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      document: Prisma.$documentPayload<ExtArgs>[]
      semester: Prisma.$semesterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      password: string
      no_whatsapp: string | null
      role: $Enums.user_role
      is_notify: boolean
      is_saved: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends user$documentArgs<ExtArgs> = {}>(args?: Subset<T, user$documentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    semester<T extends user$semesterArgs<ExtArgs> = {}>(args?: Subset<T, user$semesterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly nama: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly no_whatsapp: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly is_notify: FieldRef<"user", 'Boolean'>
    readonly is_saved: FieldRef<"user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.document
   */
  export type user$documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    where?: documentWhereInput
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    cursor?: documentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * user.semester
   */
  export type user$semesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semester
     */
    omit?: semesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semesterInclude<ExtArgs> | null
    where?: semesterWhereInput
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[]
    cursor?: semesterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    file_size: number | null
  }

  export type DocumentSumAggregateOutputType = {
    file_size: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    nama: string | null
    category: string | null
    file_name: string | null
    file_type: string | null
    file_size: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    nama: string | null
    category: string | null
    file_name: string | null
    file_type: string | null
    file_size: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    user_id: number
    nama: number
    category: number
    file_name: number
    file_type: number
    file_size: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    file_size?: true
  }

  export type DocumentSumAggregateInputType = {
    file_size?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    user_id?: true
    nama?: true
    category?: true
    file_name?: true
    file_type?: true
    file_size?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    user_id?: true
    nama?: true
    category?: true
    file_name?: true
    file_type?: true
    file_size?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    user_id?: true
    nama?: true
    category?: true
    file_name?: true
    file_type?: true
    file_size?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document to aggregate.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type documentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentWhereInput
    orderBy?: documentOrderByWithAggregationInput | documentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: documentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    user_id: string
    nama: string
    category: string
    file_name: string
    file_type: string
    file_size: number
    created_at: Date
    updated_at: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends documentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type documentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nama?: boolean
    category?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type documentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nama?: boolean
    category?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type documentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nama?: boolean
    category?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type documentSelectScalar = {
    id?: boolean
    user_id?: boolean
    nama?: boolean
    category?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type documentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "nama" | "category" | "file_name" | "file_type" | "file_size" | "created_at" | "updated_at", ExtArgs["result"]["document"]>
  export type documentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type documentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type documentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $documentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      nama: string
      category: string
      file_name: string
      file_type: string
      file_size: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type documentGetPayload<S extends boolean | null | undefined | documentDefaultArgs> = $Result.GetResult<Prisma.$documentPayload, S>

  type documentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface documentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document'], meta: { name: 'document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {documentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentFindUniqueArgs>(args: SelectSubset<T, documentFindUniqueArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentFindUniqueOrThrowArgs>(args: SelectSubset<T, documentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentFindFirstArgs>(args?: SelectSubset<T, documentFindFirstArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentFindFirstOrThrowArgs>(args?: SelectSubset<T, documentFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends documentFindManyArgs>(args?: SelectSubset<T, documentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {documentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends documentCreateArgs>(args: SelectSubset<T, documentCreateArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {documentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentCreateManyArgs>(args?: SelectSubset<T, documentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {documentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends documentCreateManyAndReturnArgs>(args?: SelectSubset<T, documentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {documentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends documentDeleteArgs>(args: SelectSubset<T, documentDeleteArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {documentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentUpdateArgs>(args: SelectSubset<T, documentUpdateArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {documentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentDeleteManyArgs>(args?: SelectSubset<T, documentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentUpdateManyArgs>(args: SelectSubset<T, documentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {documentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends documentUpdateManyAndReturnArgs>(args: SelectSubset<T, documentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {documentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends documentUpsertArgs>(args: SelectSubset<T, documentUpsertArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentCountArgs>(
      args?: Subset<T, documentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentGroupByArgs['orderBy'] }
        : { orderBy?: documentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document model
   */
  readonly fields: documentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the document model
   */
  interface documentFieldRefs {
    readonly id: FieldRef<"document", 'String'>
    readonly user_id: FieldRef<"document", 'String'>
    readonly nama: FieldRef<"document", 'String'>
    readonly category: FieldRef<"document", 'String'>
    readonly file_name: FieldRef<"document", 'String'>
    readonly file_type: FieldRef<"document", 'String'>
    readonly file_size: FieldRef<"document", 'Int'>
    readonly created_at: FieldRef<"document", 'DateTime'>
    readonly updated_at: FieldRef<"document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * document findUnique
   */
  export type documentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where: documentWhereUniqueInput
  }

  /**
   * document findUniqueOrThrow
   */
  export type documentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where: documentWhereUniqueInput
  }

  /**
   * document findFirst
   */
  export type documentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * document findFirstOrThrow
   */
  export type documentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * document findMany
   */
  export type documentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * document create
   */
  export type documentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * The data needed to create a document.
     */
    data: XOR<documentCreateInput, documentUncheckedCreateInput>
  }

  /**
   * document createMany
   */
  export type documentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentCreateManyInput | documentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * document createManyAndReturn
   */
  export type documentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * The data used to create many documents.
     */
    data: documentCreateManyInput | documentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * document update
   */
  export type documentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * The data needed to update a document.
     */
    data: XOR<documentUpdateInput, documentUncheckedUpdateInput>
    /**
     * Choose, which document to update.
     */
    where: documentWhereUniqueInput
  }

  /**
   * document updateMany
   */
  export type documentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
  }

  /**
   * document updateManyAndReturn
   */
  export type documentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * The data used to update documents.
     */
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * document upsert
   */
  export type documentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * The filter to search for the document to update in case it exists.
     */
    where: documentWhereUniqueInput
    /**
     * In case the document found by the `where` argument doesn't exist, create a new document with this data.
     */
    create: XOR<documentCreateInput, documentUncheckedCreateInput>
    /**
     * In case the document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentUpdateInput, documentUncheckedUpdateInput>
  }

  /**
   * document delete
   */
  export type documentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter which document to delete.
     */
    where: documentWhereUniqueInput
  }

  /**
   * document deleteMany
   */
  export type documentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentWhereInput
    /**
     * Limit how many documents to delete.
     */
    limit?: number
  }

  /**
   * document without action
   */
  export type documentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KelasScalarFieldEnum: {
    id: 'id',
    semester_id: 'semester_id',
    mata_kuliah: 'mata_kuliah',
    hari: 'hari',
    waktu_mulai: 'waktu_mulai',
    waktu_selesai: 'waktu_selesai',
    ruang: 'ruang',
    dosen: 'dosen',
    kelas: 'kelas',
    kode: 'kode'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const SemesterScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    nama: 'nama'
  };

  export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    no_whatsapp: 'no_whatsapp',
    role: 'role',
    is_notify: 'is_notify',
    is_saved: 'is_saved'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    nama: 'nama',
    category: 'category',
    file_name: 'file_name',
    file_type: 'file_type',
    file_size: 'file_size',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'kelas_hari'
   */
  export type Enumkelas_hariFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'kelas_hari'>
    


  /**
   * Reference to a field of type 'kelas_hari[]'
   */
  export type ListEnumkelas_hariFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'kelas_hari[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type kelasWhereInput = {
    AND?: kelasWhereInput | kelasWhereInput[]
    OR?: kelasWhereInput[]
    NOT?: kelasWhereInput | kelasWhereInput[]
    id?: StringFilter<"kelas"> | string
    semester_id?: StringFilter<"kelas"> | string
    mata_kuliah?: StringFilter<"kelas"> | string
    hari?: Enumkelas_hariFilter<"kelas"> | $Enums.kelas_hari
    waktu_mulai?: DateTimeFilter<"kelas"> | Date | string
    waktu_selesai?: DateTimeFilter<"kelas"> | Date | string
    ruang?: StringFilter<"kelas"> | string
    dosen?: StringFilter<"kelas"> | string
    kelas?: StringFilter<"kelas"> | string
    kode?: StringFilter<"kelas"> | string
    semester?: XOR<SemesterScalarRelationFilter, semesterWhereInput>
  }

  export type kelasOrderByWithRelationInput = {
    id?: SortOrder
    semester_id?: SortOrder
    mata_kuliah?: SortOrder
    hari?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruang?: SortOrder
    dosen?: SortOrder
    kelas?: SortOrder
    kode?: SortOrder
    semester?: semesterOrderByWithRelationInput
  }

  export type kelasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: kelasWhereInput | kelasWhereInput[]
    OR?: kelasWhereInput[]
    NOT?: kelasWhereInput | kelasWhereInput[]
    semester_id?: StringFilter<"kelas"> | string
    mata_kuliah?: StringFilter<"kelas"> | string
    hari?: Enumkelas_hariFilter<"kelas"> | $Enums.kelas_hari
    waktu_mulai?: DateTimeFilter<"kelas"> | Date | string
    waktu_selesai?: DateTimeFilter<"kelas"> | Date | string
    ruang?: StringFilter<"kelas"> | string
    dosen?: StringFilter<"kelas"> | string
    kelas?: StringFilter<"kelas"> | string
    kode?: StringFilter<"kelas"> | string
    semester?: XOR<SemesterScalarRelationFilter, semesterWhereInput>
  }, "id">

  export type kelasOrderByWithAggregationInput = {
    id?: SortOrder
    semester_id?: SortOrder
    mata_kuliah?: SortOrder
    hari?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruang?: SortOrder
    dosen?: SortOrder
    kelas?: SortOrder
    kode?: SortOrder
    _count?: kelasCountOrderByAggregateInput
    _max?: kelasMaxOrderByAggregateInput
    _min?: kelasMinOrderByAggregateInput
  }

  export type kelasScalarWhereWithAggregatesInput = {
    AND?: kelasScalarWhereWithAggregatesInput | kelasScalarWhereWithAggregatesInput[]
    OR?: kelasScalarWhereWithAggregatesInput[]
    NOT?: kelasScalarWhereWithAggregatesInput | kelasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"kelas"> | string
    semester_id?: StringWithAggregatesFilter<"kelas"> | string
    mata_kuliah?: StringWithAggregatesFilter<"kelas"> | string
    hari?: Enumkelas_hariWithAggregatesFilter<"kelas"> | $Enums.kelas_hari
    waktu_mulai?: DateTimeWithAggregatesFilter<"kelas"> | Date | string
    waktu_selesai?: DateTimeWithAggregatesFilter<"kelas"> | Date | string
    ruang?: StringWithAggregatesFilter<"kelas"> | string
    dosen?: StringWithAggregatesFilter<"kelas"> | string
    kelas?: StringWithAggregatesFilter<"kelas"> | string
    kode?: StringWithAggregatesFilter<"kelas"> | string
  }

  export type semesterWhereInput = {
    AND?: semesterWhereInput | semesterWhereInput[]
    OR?: semesterWhereInput[]
    NOT?: semesterWhereInput | semesterWhereInput[]
    id?: StringFilter<"semester"> | string
    user_id?: StringFilter<"semester"> | string
    nama?: IntFilter<"semester"> | number
    kelas?: KelasListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type semesterOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
    kelas?: kelasOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type semesterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: semesterWhereInput | semesterWhereInput[]
    OR?: semesterWhereInput[]
    NOT?: semesterWhereInput | semesterWhereInput[]
    user_id?: StringFilter<"semester"> | string
    nama?: IntFilter<"semester"> | number
    kelas?: KelasListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type semesterOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
    _count?: semesterCountOrderByAggregateInput
    _avg?: semesterAvgOrderByAggregateInput
    _max?: semesterMaxOrderByAggregateInput
    _min?: semesterMinOrderByAggregateInput
    _sum?: semesterSumOrderByAggregateInput
  }

  export type semesterScalarWhereWithAggregatesInput = {
    AND?: semesterScalarWhereWithAggregatesInput | semesterScalarWhereWithAggregatesInput[]
    OR?: semesterScalarWhereWithAggregatesInput[]
    NOT?: semesterScalarWhereWithAggregatesInput | semesterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"semester"> | string
    user_id?: StringWithAggregatesFilter<"semester"> | string
    nama?: IntWithAggregatesFilter<"semester"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    nama?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    no_whatsapp?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    is_notify?: BoolFilter<"user"> | boolean
    is_saved?: BoolFilter<"user"> | boolean
    document?: DocumentListRelationFilter
    semester?: SemesterListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_whatsapp?: SortOrderInput | SortOrder
    role?: SortOrder
    is_notify?: SortOrder
    is_saved?: SortOrder
    document?: documentOrderByRelationAggregateInput
    semester?: semesterOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    no_whatsapp?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    nama?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    is_notify?: BoolFilter<"user"> | boolean
    is_saved?: BoolFilter<"user"> | boolean
    document?: DocumentListRelationFilter
    semester?: SemesterListRelationFilter
  }, "id" | "email" | "no_whatsapp">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_whatsapp?: SortOrderInput | SortOrder
    role?: SortOrder
    is_notify?: SortOrder
    is_saved?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    nama?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    no_whatsapp?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
    is_notify?: BoolWithAggregatesFilter<"user"> | boolean
    is_saved?: BoolWithAggregatesFilter<"user"> | boolean
  }

  export type documentWhereInput = {
    AND?: documentWhereInput | documentWhereInput[]
    OR?: documentWhereInput[]
    NOT?: documentWhereInput | documentWhereInput[]
    id?: StringFilter<"document"> | string
    user_id?: StringFilter<"document"> | string
    nama?: StringFilter<"document"> | string
    category?: StringFilter<"document"> | string
    file_name?: StringFilter<"document"> | string
    file_type?: StringFilter<"document"> | string
    file_size?: IntFilter<"document"> | number
    created_at?: DateTimeFilter<"document"> | Date | string
    updated_at?: DateTimeFilter<"document"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type documentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
    category?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type documentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: documentWhereInput | documentWhereInput[]
    OR?: documentWhereInput[]
    NOT?: documentWhereInput | documentWhereInput[]
    user_id?: StringFilter<"document"> | string
    nama?: StringFilter<"document"> | string
    category?: StringFilter<"document"> | string
    file_name?: StringFilter<"document"> | string
    file_type?: StringFilter<"document"> | string
    file_size?: IntFilter<"document"> | number
    created_at?: DateTimeFilter<"document"> | Date | string
    updated_at?: DateTimeFilter<"document"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type documentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
    category?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: documentCountOrderByAggregateInput
    _avg?: documentAvgOrderByAggregateInput
    _max?: documentMaxOrderByAggregateInput
    _min?: documentMinOrderByAggregateInput
    _sum?: documentSumOrderByAggregateInput
  }

  export type documentScalarWhereWithAggregatesInput = {
    AND?: documentScalarWhereWithAggregatesInput | documentScalarWhereWithAggregatesInput[]
    OR?: documentScalarWhereWithAggregatesInput[]
    NOT?: documentScalarWhereWithAggregatesInput | documentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"document"> | string
    user_id?: StringWithAggregatesFilter<"document"> | string
    nama?: StringWithAggregatesFilter<"document"> | string
    category?: StringWithAggregatesFilter<"document"> | string
    file_name?: StringWithAggregatesFilter<"document"> | string
    file_type?: StringWithAggregatesFilter<"document"> | string
    file_size?: IntWithAggregatesFilter<"document"> | number
    created_at?: DateTimeWithAggregatesFilter<"document"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"document"> | Date | string
  }

  export type kelasCreateInput = {
    id: string
    mata_kuliah: string
    hari: $Enums.kelas_hari
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruang: string
    dosen: string
    kelas: string
    kode: string
    semester: semesterCreateNestedOneWithoutKelasInput
  }

  export type kelasUncheckedCreateInput = {
    id: string
    semester_id: string
    mata_kuliah: string
    hari: $Enums.kelas_hari
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruang: string
    dosen: string
    kelas: string
    kode: string
  }

  export type kelasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mata_kuliah?: StringFieldUpdateOperationsInput | string
    hari?: Enumkelas_hariFieldUpdateOperationsInput | $Enums.kelas_hari
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruang?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    semester?: semesterUpdateOneRequiredWithoutKelasNestedInput
  }

  export type kelasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester_id?: StringFieldUpdateOperationsInput | string
    mata_kuliah?: StringFieldUpdateOperationsInput | string
    hari?: Enumkelas_hariFieldUpdateOperationsInput | $Enums.kelas_hari
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruang?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type kelasCreateManyInput = {
    id: string
    semester_id: string
    mata_kuliah: string
    hari: $Enums.kelas_hari
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruang: string
    dosen: string
    kelas: string
    kode: string
  }

  export type kelasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mata_kuliah?: StringFieldUpdateOperationsInput | string
    hari?: Enumkelas_hariFieldUpdateOperationsInput | $Enums.kelas_hari
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruang?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type kelasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester_id?: StringFieldUpdateOperationsInput | string
    mata_kuliah?: StringFieldUpdateOperationsInput | string
    hari?: Enumkelas_hariFieldUpdateOperationsInput | $Enums.kelas_hari
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruang?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type semesterCreateInput = {
    id: string
    nama: number
    kelas?: kelasCreateNestedManyWithoutSemesterInput
    user: userCreateNestedOneWithoutSemesterInput
  }

  export type semesterUncheckedCreateInput = {
    id: string
    user_id: string
    nama: number
    kelas?: kelasUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type semesterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
    kelas?: kelasUpdateManyWithoutSemesterNestedInput
    user?: userUpdateOneRequiredWithoutSemesterNestedInput
  }

  export type semesterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
    kelas?: kelasUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type semesterCreateManyInput = {
    id: string
    user_id: string
    nama: number
  }

  export type semesterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
  }

  export type semesterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    id: string
    nama: string
    email: string
    password: string
    no_whatsapp?: string | null
    role: $Enums.user_role
    is_notify?: boolean
    is_saved?: boolean
    document?: documentCreateNestedManyWithoutUserInput
    semester?: semesterCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    nama: string
    email: string
    password: string
    no_whatsapp?: string | null
    role: $Enums.user_role
    is_notify?: boolean
    is_saved?: boolean
    document?: documentUncheckedCreateNestedManyWithoutUserInput
    semester?: semesterUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_notify?: BoolFieldUpdateOperationsInput | boolean
    is_saved?: BoolFieldUpdateOperationsInput | boolean
    document?: documentUpdateManyWithoutUserNestedInput
    semester?: semesterUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_notify?: BoolFieldUpdateOperationsInput | boolean
    is_saved?: BoolFieldUpdateOperationsInput | boolean
    document?: documentUncheckedUpdateManyWithoutUserNestedInput
    semester?: semesterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    nama: string
    email: string
    password: string
    no_whatsapp?: string | null
    role: $Enums.user_role
    is_notify?: boolean
    is_saved?: boolean
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_notify?: BoolFieldUpdateOperationsInput | boolean
    is_saved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_notify?: BoolFieldUpdateOperationsInput | boolean
    is_saved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type documentCreateInput = {
    id: string
    nama: string
    category: string
    file_name: string
    file_type: string
    file_size: number
    created_at?: Date | string
    updated_at: Date | string
    user: userCreateNestedOneWithoutDocumentInput
  }

  export type documentUncheckedCreateInput = {
    id: string
    user_id: string
    nama: string
    category: string
    file_name: string
    file_type: string
    file_size: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type documentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutDocumentNestedInput
  }

  export type documentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentCreateManyInput = {
    id: string
    user_id: string
    nama: string
    category: string
    file_name: string
    file_type: string
    file_size: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type documentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumkelas_hariFilter<$PrismaModel = never> = {
    equals?: $Enums.kelas_hari | Enumkelas_hariFieldRefInput<$PrismaModel>
    in?: $Enums.kelas_hari[] | ListEnumkelas_hariFieldRefInput<$PrismaModel>
    notIn?: $Enums.kelas_hari[] | ListEnumkelas_hariFieldRefInput<$PrismaModel>
    not?: NestedEnumkelas_hariFilter<$PrismaModel> | $Enums.kelas_hari
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SemesterScalarRelationFilter = {
    is?: semesterWhereInput
    isNot?: semesterWhereInput
  }

  export type kelasCountOrderByAggregateInput = {
    id?: SortOrder
    semester_id?: SortOrder
    mata_kuliah?: SortOrder
    hari?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruang?: SortOrder
    dosen?: SortOrder
    kelas?: SortOrder
    kode?: SortOrder
  }

  export type kelasMaxOrderByAggregateInput = {
    id?: SortOrder
    semester_id?: SortOrder
    mata_kuliah?: SortOrder
    hari?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruang?: SortOrder
    dosen?: SortOrder
    kelas?: SortOrder
    kode?: SortOrder
  }

  export type kelasMinOrderByAggregateInput = {
    id?: SortOrder
    semester_id?: SortOrder
    mata_kuliah?: SortOrder
    hari?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruang?: SortOrder
    dosen?: SortOrder
    kelas?: SortOrder
    kode?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumkelas_hariWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kelas_hari | Enumkelas_hariFieldRefInput<$PrismaModel>
    in?: $Enums.kelas_hari[] | ListEnumkelas_hariFieldRefInput<$PrismaModel>
    notIn?: $Enums.kelas_hari[] | ListEnumkelas_hariFieldRefInput<$PrismaModel>
    not?: NestedEnumkelas_hariWithAggregatesFilter<$PrismaModel> | $Enums.kelas_hari
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumkelas_hariFilter<$PrismaModel>
    _max?: NestedEnumkelas_hariFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type KelasListRelationFilter = {
    every?: kelasWhereInput
    some?: kelasWhereInput
    none?: kelasWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type kelasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type semesterCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
  }

  export type semesterAvgOrderByAggregateInput = {
    nama?: SortOrder
  }

  export type semesterMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
  }

  export type semesterMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
  }

  export type semesterSumOrderByAggregateInput = {
    nama?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DocumentListRelationFilter = {
    every?: documentWhereInput
    some?: documentWhereInput
    none?: documentWhereInput
  }

  export type SemesterListRelationFilter = {
    every?: semesterWhereInput
    some?: semesterWhereInput
    none?: semesterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type documentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type semesterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_whatsapp?: SortOrder
    role?: SortOrder
    is_notify?: SortOrder
    is_saved?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_whatsapp?: SortOrder
    role?: SortOrder
    is_notify?: SortOrder
    is_saved?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_whatsapp?: SortOrder
    role?: SortOrder
    is_notify?: SortOrder
    is_saved?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type documentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
    category?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type documentAvgOrderByAggregateInput = {
    file_size?: SortOrder
  }

  export type documentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
    category?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type documentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama?: SortOrder
    category?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type documentSumOrderByAggregateInput = {
    file_size?: SortOrder
  }

  export type semesterCreateNestedOneWithoutKelasInput = {
    create?: XOR<semesterCreateWithoutKelasInput, semesterUncheckedCreateWithoutKelasInput>
    connectOrCreate?: semesterCreateOrConnectWithoutKelasInput
    connect?: semesterWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumkelas_hariFieldUpdateOperationsInput = {
    set?: $Enums.kelas_hari
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type semesterUpdateOneRequiredWithoutKelasNestedInput = {
    create?: XOR<semesterCreateWithoutKelasInput, semesterUncheckedCreateWithoutKelasInput>
    connectOrCreate?: semesterCreateOrConnectWithoutKelasInput
    upsert?: semesterUpsertWithoutKelasInput
    connect?: semesterWhereUniqueInput
    update?: XOR<XOR<semesterUpdateToOneWithWhereWithoutKelasInput, semesterUpdateWithoutKelasInput>, semesterUncheckedUpdateWithoutKelasInput>
  }

  export type kelasCreateNestedManyWithoutSemesterInput = {
    create?: XOR<kelasCreateWithoutSemesterInput, kelasUncheckedCreateWithoutSemesterInput> | kelasCreateWithoutSemesterInput[] | kelasUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: kelasCreateOrConnectWithoutSemesterInput | kelasCreateOrConnectWithoutSemesterInput[]
    createMany?: kelasCreateManySemesterInputEnvelope
    connect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutSemesterInput = {
    create?: XOR<userCreateWithoutSemesterInput, userUncheckedCreateWithoutSemesterInput>
    connectOrCreate?: userCreateOrConnectWithoutSemesterInput
    connect?: userWhereUniqueInput
  }

  export type kelasUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<kelasCreateWithoutSemesterInput, kelasUncheckedCreateWithoutSemesterInput> | kelasCreateWithoutSemesterInput[] | kelasUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: kelasCreateOrConnectWithoutSemesterInput | kelasCreateOrConnectWithoutSemesterInput[]
    createMany?: kelasCreateManySemesterInputEnvelope
    connect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type kelasUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<kelasCreateWithoutSemesterInput, kelasUncheckedCreateWithoutSemesterInput> | kelasCreateWithoutSemesterInput[] | kelasUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: kelasCreateOrConnectWithoutSemesterInput | kelasCreateOrConnectWithoutSemesterInput[]
    upsert?: kelasUpsertWithWhereUniqueWithoutSemesterInput | kelasUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: kelasCreateManySemesterInputEnvelope
    set?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    disconnect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    delete?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    connect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    update?: kelasUpdateWithWhereUniqueWithoutSemesterInput | kelasUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: kelasUpdateManyWithWhereWithoutSemesterInput | kelasUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: kelasScalarWhereInput | kelasScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutSemesterNestedInput = {
    create?: XOR<userCreateWithoutSemesterInput, userUncheckedCreateWithoutSemesterInput>
    connectOrCreate?: userCreateOrConnectWithoutSemesterInput
    upsert?: userUpsertWithoutSemesterInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSemesterInput, userUpdateWithoutSemesterInput>, userUncheckedUpdateWithoutSemesterInput>
  }

  export type kelasUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<kelasCreateWithoutSemesterInput, kelasUncheckedCreateWithoutSemesterInput> | kelasCreateWithoutSemesterInput[] | kelasUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: kelasCreateOrConnectWithoutSemesterInput | kelasCreateOrConnectWithoutSemesterInput[]
    upsert?: kelasUpsertWithWhereUniqueWithoutSemesterInput | kelasUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: kelasCreateManySemesterInputEnvelope
    set?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    disconnect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    delete?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    connect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    update?: kelasUpdateWithWhereUniqueWithoutSemesterInput | kelasUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: kelasUpdateManyWithWhereWithoutSemesterInput | kelasUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: kelasScalarWhereInput | kelasScalarWhereInput[]
  }

  export type documentCreateNestedManyWithoutUserInput = {
    create?: XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput> | documentCreateWithoutUserInput[] | documentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: documentCreateOrConnectWithoutUserInput | documentCreateOrConnectWithoutUserInput[]
    createMany?: documentCreateManyUserInputEnvelope
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
  }

  export type semesterCreateNestedManyWithoutUserInput = {
    create?: XOR<semesterCreateWithoutUserInput, semesterUncheckedCreateWithoutUserInput> | semesterCreateWithoutUserInput[] | semesterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: semesterCreateOrConnectWithoutUserInput | semesterCreateOrConnectWithoutUserInput[]
    createMany?: semesterCreateManyUserInputEnvelope
    connect?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
  }

  export type documentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput> | documentCreateWithoutUserInput[] | documentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: documentCreateOrConnectWithoutUserInput | documentCreateOrConnectWithoutUserInput[]
    createMany?: documentCreateManyUserInputEnvelope
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
  }

  export type semesterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<semesterCreateWithoutUserInput, semesterUncheckedCreateWithoutUserInput> | semesterCreateWithoutUserInput[] | semesterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: semesterCreateOrConnectWithoutUserInput | semesterCreateOrConnectWithoutUserInput[]
    createMany?: semesterCreateManyUserInputEnvelope
    connect?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type documentUpdateManyWithoutUserNestedInput = {
    create?: XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput> | documentCreateWithoutUserInput[] | documentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: documentCreateOrConnectWithoutUserInput | documentCreateOrConnectWithoutUserInput[]
    upsert?: documentUpsertWithWhereUniqueWithoutUserInput | documentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: documentCreateManyUserInputEnvelope
    set?: documentWhereUniqueInput | documentWhereUniqueInput[]
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[]
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    update?: documentUpdateWithWhereUniqueWithoutUserInput | documentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: documentUpdateManyWithWhereWithoutUserInput | documentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[]
  }

  export type semesterUpdateManyWithoutUserNestedInput = {
    create?: XOR<semesterCreateWithoutUserInput, semesterUncheckedCreateWithoutUserInput> | semesterCreateWithoutUserInput[] | semesterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: semesterCreateOrConnectWithoutUserInput | semesterCreateOrConnectWithoutUserInput[]
    upsert?: semesterUpsertWithWhereUniqueWithoutUserInput | semesterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: semesterCreateManyUserInputEnvelope
    set?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
    disconnect?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
    delete?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
    connect?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
    update?: semesterUpdateWithWhereUniqueWithoutUserInput | semesterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: semesterUpdateManyWithWhereWithoutUserInput | semesterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: semesterScalarWhereInput | semesterScalarWhereInput[]
  }

  export type documentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput> | documentCreateWithoutUserInput[] | documentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: documentCreateOrConnectWithoutUserInput | documentCreateOrConnectWithoutUserInput[]
    upsert?: documentUpsertWithWhereUniqueWithoutUserInput | documentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: documentCreateManyUserInputEnvelope
    set?: documentWhereUniqueInput | documentWhereUniqueInput[]
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[]
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    update?: documentUpdateWithWhereUniqueWithoutUserInput | documentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: documentUpdateManyWithWhereWithoutUserInput | documentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[]
  }

  export type semesterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<semesterCreateWithoutUserInput, semesterUncheckedCreateWithoutUserInput> | semesterCreateWithoutUserInput[] | semesterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: semesterCreateOrConnectWithoutUserInput | semesterCreateOrConnectWithoutUserInput[]
    upsert?: semesterUpsertWithWhereUniqueWithoutUserInput | semesterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: semesterCreateManyUserInputEnvelope
    set?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
    disconnect?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
    delete?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
    connect?: semesterWhereUniqueInput | semesterWhereUniqueInput[]
    update?: semesterUpdateWithWhereUniqueWithoutUserInput | semesterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: semesterUpdateManyWithWhereWithoutUserInput | semesterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: semesterScalarWhereInput | semesterScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutDocumentInput = {
    create?: XOR<userCreateWithoutDocumentInput, userUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: userCreateOrConnectWithoutDocumentInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutDocumentNestedInput = {
    create?: XOR<userCreateWithoutDocumentInput, userUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: userCreateOrConnectWithoutDocumentInput
    upsert?: userUpsertWithoutDocumentInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDocumentInput, userUpdateWithoutDocumentInput>, userUncheckedUpdateWithoutDocumentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumkelas_hariFilter<$PrismaModel = never> = {
    equals?: $Enums.kelas_hari | Enumkelas_hariFieldRefInput<$PrismaModel>
    in?: $Enums.kelas_hari[] | ListEnumkelas_hariFieldRefInput<$PrismaModel>
    notIn?: $Enums.kelas_hari[] | ListEnumkelas_hariFieldRefInput<$PrismaModel>
    not?: NestedEnumkelas_hariFilter<$PrismaModel> | $Enums.kelas_hari
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumkelas_hariWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kelas_hari | Enumkelas_hariFieldRefInput<$PrismaModel>
    in?: $Enums.kelas_hari[] | ListEnumkelas_hariFieldRefInput<$PrismaModel>
    notIn?: $Enums.kelas_hari[] | ListEnumkelas_hariFieldRefInput<$PrismaModel>
    not?: NestedEnumkelas_hariWithAggregatesFilter<$PrismaModel> | $Enums.kelas_hari
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumkelas_hariFilter<$PrismaModel>
    _max?: NestedEnumkelas_hariFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type semesterCreateWithoutKelasInput = {
    id: string
    nama: number
    user: userCreateNestedOneWithoutSemesterInput
  }

  export type semesterUncheckedCreateWithoutKelasInput = {
    id: string
    user_id: string
    nama: number
  }

  export type semesterCreateOrConnectWithoutKelasInput = {
    where: semesterWhereUniqueInput
    create: XOR<semesterCreateWithoutKelasInput, semesterUncheckedCreateWithoutKelasInput>
  }

  export type semesterUpsertWithoutKelasInput = {
    update: XOR<semesterUpdateWithoutKelasInput, semesterUncheckedUpdateWithoutKelasInput>
    create: XOR<semesterCreateWithoutKelasInput, semesterUncheckedCreateWithoutKelasInput>
    where?: semesterWhereInput
  }

  export type semesterUpdateToOneWithWhereWithoutKelasInput = {
    where?: semesterWhereInput
    data: XOR<semesterUpdateWithoutKelasInput, semesterUncheckedUpdateWithoutKelasInput>
  }

  export type semesterUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutSemesterNestedInput
  }

  export type semesterUncheckedUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
  }

  export type kelasCreateWithoutSemesterInput = {
    id: string
    mata_kuliah: string
    hari: $Enums.kelas_hari
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruang: string
    dosen: string
    kelas: string
    kode: string
  }

  export type kelasUncheckedCreateWithoutSemesterInput = {
    id: string
    mata_kuliah: string
    hari: $Enums.kelas_hari
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruang: string
    dosen: string
    kelas: string
    kode: string
  }

  export type kelasCreateOrConnectWithoutSemesterInput = {
    where: kelasWhereUniqueInput
    create: XOR<kelasCreateWithoutSemesterInput, kelasUncheckedCreateWithoutSemesterInput>
  }

  export type kelasCreateManySemesterInputEnvelope = {
    data: kelasCreateManySemesterInput | kelasCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutSemesterInput = {
    id: string
    nama: string
    email: string
    password: string
    no_whatsapp?: string | null
    role: $Enums.user_role
    is_notify?: boolean
    is_saved?: boolean
    document?: documentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSemesterInput = {
    id: string
    nama: string
    email: string
    password: string
    no_whatsapp?: string | null
    role: $Enums.user_role
    is_notify?: boolean
    is_saved?: boolean
    document?: documentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSemesterInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSemesterInput, userUncheckedCreateWithoutSemesterInput>
  }

  export type kelasUpsertWithWhereUniqueWithoutSemesterInput = {
    where: kelasWhereUniqueInput
    update: XOR<kelasUpdateWithoutSemesterInput, kelasUncheckedUpdateWithoutSemesterInput>
    create: XOR<kelasCreateWithoutSemesterInput, kelasUncheckedCreateWithoutSemesterInput>
  }

  export type kelasUpdateWithWhereUniqueWithoutSemesterInput = {
    where: kelasWhereUniqueInput
    data: XOR<kelasUpdateWithoutSemesterInput, kelasUncheckedUpdateWithoutSemesterInput>
  }

  export type kelasUpdateManyWithWhereWithoutSemesterInput = {
    where: kelasScalarWhereInput
    data: XOR<kelasUpdateManyMutationInput, kelasUncheckedUpdateManyWithoutSemesterInput>
  }

  export type kelasScalarWhereInput = {
    AND?: kelasScalarWhereInput | kelasScalarWhereInput[]
    OR?: kelasScalarWhereInput[]
    NOT?: kelasScalarWhereInput | kelasScalarWhereInput[]
    id?: StringFilter<"kelas"> | string
    semester_id?: StringFilter<"kelas"> | string
    mata_kuliah?: StringFilter<"kelas"> | string
    hari?: Enumkelas_hariFilter<"kelas"> | $Enums.kelas_hari
    waktu_mulai?: DateTimeFilter<"kelas"> | Date | string
    waktu_selesai?: DateTimeFilter<"kelas"> | Date | string
    ruang?: StringFilter<"kelas"> | string
    dosen?: StringFilter<"kelas"> | string
    kelas?: StringFilter<"kelas"> | string
    kode?: StringFilter<"kelas"> | string
  }

  export type userUpsertWithoutSemesterInput = {
    update: XOR<userUpdateWithoutSemesterInput, userUncheckedUpdateWithoutSemesterInput>
    create: XOR<userCreateWithoutSemesterInput, userUncheckedCreateWithoutSemesterInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSemesterInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSemesterInput, userUncheckedUpdateWithoutSemesterInput>
  }

  export type userUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_notify?: BoolFieldUpdateOperationsInput | boolean
    is_saved?: BoolFieldUpdateOperationsInput | boolean
    document?: documentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_notify?: BoolFieldUpdateOperationsInput | boolean
    is_saved?: BoolFieldUpdateOperationsInput | boolean
    document?: documentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type documentCreateWithoutUserInput = {
    id: string
    nama: string
    category: string
    file_name: string
    file_type: string
    file_size: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type documentUncheckedCreateWithoutUserInput = {
    id: string
    nama: string
    category: string
    file_name: string
    file_type: string
    file_size: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type documentCreateOrConnectWithoutUserInput = {
    where: documentWhereUniqueInput
    create: XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput>
  }

  export type documentCreateManyUserInputEnvelope = {
    data: documentCreateManyUserInput | documentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type semesterCreateWithoutUserInput = {
    id: string
    nama: number
    kelas?: kelasCreateNestedManyWithoutSemesterInput
  }

  export type semesterUncheckedCreateWithoutUserInput = {
    id: string
    nama: number
    kelas?: kelasUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type semesterCreateOrConnectWithoutUserInput = {
    where: semesterWhereUniqueInput
    create: XOR<semesterCreateWithoutUserInput, semesterUncheckedCreateWithoutUserInput>
  }

  export type semesterCreateManyUserInputEnvelope = {
    data: semesterCreateManyUserInput | semesterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type documentUpsertWithWhereUniqueWithoutUserInput = {
    where: documentWhereUniqueInput
    update: XOR<documentUpdateWithoutUserInput, documentUncheckedUpdateWithoutUserInput>
    create: XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput>
  }

  export type documentUpdateWithWhereUniqueWithoutUserInput = {
    where: documentWhereUniqueInput
    data: XOR<documentUpdateWithoutUserInput, documentUncheckedUpdateWithoutUserInput>
  }

  export type documentUpdateManyWithWhereWithoutUserInput = {
    where: documentScalarWhereInput
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyWithoutUserInput>
  }

  export type documentScalarWhereInput = {
    AND?: documentScalarWhereInput | documentScalarWhereInput[]
    OR?: documentScalarWhereInput[]
    NOT?: documentScalarWhereInput | documentScalarWhereInput[]
    id?: StringFilter<"document"> | string
    user_id?: StringFilter<"document"> | string
    nama?: StringFilter<"document"> | string
    category?: StringFilter<"document"> | string
    file_name?: StringFilter<"document"> | string
    file_type?: StringFilter<"document"> | string
    file_size?: IntFilter<"document"> | number
    created_at?: DateTimeFilter<"document"> | Date | string
    updated_at?: DateTimeFilter<"document"> | Date | string
  }

  export type semesterUpsertWithWhereUniqueWithoutUserInput = {
    where: semesterWhereUniqueInput
    update: XOR<semesterUpdateWithoutUserInput, semesterUncheckedUpdateWithoutUserInput>
    create: XOR<semesterCreateWithoutUserInput, semesterUncheckedCreateWithoutUserInput>
  }

  export type semesterUpdateWithWhereUniqueWithoutUserInput = {
    where: semesterWhereUniqueInput
    data: XOR<semesterUpdateWithoutUserInput, semesterUncheckedUpdateWithoutUserInput>
  }

  export type semesterUpdateManyWithWhereWithoutUserInput = {
    where: semesterScalarWhereInput
    data: XOR<semesterUpdateManyMutationInput, semesterUncheckedUpdateManyWithoutUserInput>
  }

  export type semesterScalarWhereInput = {
    AND?: semesterScalarWhereInput | semesterScalarWhereInput[]
    OR?: semesterScalarWhereInput[]
    NOT?: semesterScalarWhereInput | semesterScalarWhereInput[]
    id?: StringFilter<"semester"> | string
    user_id?: StringFilter<"semester"> | string
    nama?: IntFilter<"semester"> | number
  }

  export type userCreateWithoutDocumentInput = {
    id: string
    nama: string
    email: string
    password: string
    no_whatsapp?: string | null
    role: $Enums.user_role
    is_notify?: boolean
    is_saved?: boolean
    semester?: semesterCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDocumentInput = {
    id: string
    nama: string
    email: string
    password: string
    no_whatsapp?: string | null
    role: $Enums.user_role
    is_notify?: boolean
    is_saved?: boolean
    semester?: semesterUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDocumentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDocumentInput, userUncheckedCreateWithoutDocumentInput>
  }

  export type userUpsertWithoutDocumentInput = {
    update: XOR<userUpdateWithoutDocumentInput, userUncheckedUpdateWithoutDocumentInput>
    create: XOR<userCreateWithoutDocumentInput, userUncheckedCreateWithoutDocumentInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDocumentInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDocumentInput, userUncheckedUpdateWithoutDocumentInput>
  }

  export type userUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_notify?: BoolFieldUpdateOperationsInput | boolean
    is_saved?: BoolFieldUpdateOperationsInput | boolean
    semester?: semesterUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_notify?: BoolFieldUpdateOperationsInput | boolean
    is_saved?: BoolFieldUpdateOperationsInput | boolean
    semester?: semesterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type kelasCreateManySemesterInput = {
    id: string
    mata_kuliah: string
    hari: $Enums.kelas_hari
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruang: string
    dosen: string
    kelas: string
    kode: string
  }

  export type kelasUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    mata_kuliah?: StringFieldUpdateOperationsInput | string
    hari?: Enumkelas_hariFieldUpdateOperationsInput | $Enums.kelas_hari
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruang?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type kelasUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    mata_kuliah?: StringFieldUpdateOperationsInput | string
    hari?: Enumkelas_hariFieldUpdateOperationsInput | $Enums.kelas_hari
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruang?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type kelasUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    mata_kuliah?: StringFieldUpdateOperationsInput | string
    hari?: Enumkelas_hariFieldUpdateOperationsInput | $Enums.kelas_hari
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruang?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type documentCreateManyUserInput = {
    id: string
    nama: string
    category: string
    file_name: string
    file_type: string
    file_size: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type semesterCreateManyUserInput = {
    id: string
    nama: number
  }

  export type documentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type semesterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
    kelas?: kelasUpdateManyWithoutSemesterNestedInput
  }

  export type semesterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
    kelas?: kelasUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type semesterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}