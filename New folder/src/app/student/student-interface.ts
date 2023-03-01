export interface dataSource {
  subscribe(arg0: (data: any) => void): unknown;
  no:number;
  name: string;
  regno: number;
  age:number;
  gender: string;
  dipart: string;
}