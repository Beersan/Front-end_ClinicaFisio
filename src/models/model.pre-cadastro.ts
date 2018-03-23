export interface PreCadastro {
    nome: String,
    documento: String,
    CPF: String,
    dataNascimento: Date,
    rendaFamiliar: DoubleRange,
    endereco: String,
    numero: String,
    bairro: String,
    cidade: String,
    telefoneUm: String,
    telefoneDois: String,
    encaminhamento: File,
    especialidade: String
}