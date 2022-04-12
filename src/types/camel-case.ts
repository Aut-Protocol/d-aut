type Split<S extends string, Delimiter extends string> = S extends `${infer Head}${Delimiter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : S extends Delimiter
  ? []
  : [S];

type InnerCamelCaseStringArray<Parts extends readonly any[], PreviousPart> = Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
  ? FirstPart extends undefined
    ? ''
    : FirstPart extends ''
    ? InnerCamelCaseStringArray<RemainingParts, PreviousPart>
    : `${PreviousPart extends '' ? FirstPart : Capitalize<FirstPart>}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}`
  : '';

type CamelCaseStringArray<Parts extends readonly string[]> = Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
  ? Uncapitalize<`${FirstPart}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}`>
  : never;

type WordSeparators = '-' | '_' | ' ';
export type CamelCase<K> = K extends string ? CamelCaseStringArray<Split<K extends Uppercase<K> ? Lowercase<K> : K, WordSeparators>> : K;
