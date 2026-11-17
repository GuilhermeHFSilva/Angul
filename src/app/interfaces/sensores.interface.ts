/**
 * Interface que representa uma leitura físico-química de solo coletada por sensor IoT.
 */
export interface LeituraSolo {
  id?: string;
  data: string;
  n: number; // Teor de Nitrogênio (mg/kg)
  p: number; // Teor de Fósforo (mg/kg)
  k: number; // Teor de Potássio (mg/kg)
  umidade: number; // Porcentagem de umidade do solo (ex: 0.55 = 55%)
  status?: string; // Situação operacional (ex: "Ideal", "Alerta", "Crítico")
}
