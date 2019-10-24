export interface EmailForm {
  destinatario:string;
  assunto:string;
  conteudo:string;
}

export interface Email {
  destinatario: string;
  assunto: string;
  conteudo: string;
  dataEnvio: string;
  id: string;
}
