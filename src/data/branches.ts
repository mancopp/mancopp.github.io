export interface Branch {
  name: string;
  color: string;
  order?: number;
  lastCommitId?: number;
}
export const branches: Branch[] = [
  {
    name: "university",
    color: "#449DD1",
  },
  {
    name: "job",
    color: "#D1603D",
  },
  {
    name: "personal",
    color: "#EEC643",
  },
];
