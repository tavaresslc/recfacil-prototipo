import type { FieldName } from "@/types/user";

export const FIELD_ORDER: FieldName[] = [
  "name",
  "title",
  "email",
  "phone",
  "state",
  "city",
  "linkedin",
  "portfolio",
  "chunks",
];

export const FIELD_LABELS: Partial<Record<FieldName, string>> = {
  name: "Nome Completo",
  title: "Cargo/Título",
  email: "Email",
  phone: "Telefone",
  state: "Estado",
  city: "Cidade",
  linkedin: "LinkedIn",
  portfolio: "Portfólio/Website",
  chunks: "Blocos de informação",
};