interface Attendance {
  month: string;
  year: number;
  total: number;
  highest: Highest;
  lowest: Lowest;
  ignore?: Ignore;
}
