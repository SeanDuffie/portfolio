export interface Certification {
  id: number;
  Year: number;
  Month: number;
  Day?: number;
  issuer: string;
  credentialName: string;
  credentialId: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: 3,
    Year: 2026,
    Month: 6,
    issuer: "Amazon Web Services (AWS)",
    credentialName: "AWS Certified Solutions Architect",
    credentialId: "LEIDOS-12345",
    description: "[TODO: Description for the AWS Certified Solutions Architect certification.]",
  },
  {
    id: 2,
    Year: 2026,
    Month: 6,
    issuer: "Microsoft",
    credentialName: "Azure Solutions Architect Expert",
    credentialId: "MS-12345",
    description: "[TODO: Description for the Azure Solutions Architect Expert certification.]",
  },
  {
    id: 1,
    Year: 2024,
    Month: 9,
    issuer: "Google",
    credentialName: "Google Cloud Professional Data Engineer",
    credentialId: "GC-PDE-11223",
    description: "[TODO: Description for the Google Cloud Professional Data Engineer certification.]",
  },
];
