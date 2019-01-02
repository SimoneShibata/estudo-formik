import * as Yup from 'yup';
import { validateCpfCnpj } from './validationCpfCnpj'

const verifySomeCpfCnpjNotEquals = (cpfCnpj, list) => !list.some(item => item.cpfCnpj === cpfCnpj);

const getValidationSchema = (values, list, vendedores, compradores, tipoProprietario) => (
    Yup.object().shape({
        cpfCnpj: Yup.string()
            .test('cpfCnpj', 'O CPF/CNPJ é inválido.', value => validateCpfCnpj(value))
            .test('cpfCnpj', 'O CPF/CNPJ já foi adicionado na lista',
                value => verifySomeCpfCnpjNotEquals(value, list))
            .test('cpfCnpj', 'O CPF/CNPJ já foi adicionado na lista de vendedores',
                value => tipoProprietario !== 'vendedor'
                    ? verifySomeCpfCnpjNotEquals(value, vendedores) : true)
            .test('cpfCnpj', 'O CPF/CNPJ já foi adicionado na lista de compradores',
                value => tipoProprietario !== 'comprador'
                    ? verifySomeCpfCnpjNotEquals(value, compradores) : true)
            .required('O CPF/CNPJ é obrigatório.'),
        nome: Yup.string()
            .trim()
            .required('O nome é obrigatório.'),
        celular: Yup.string()
            .required('O número de celular é obrigatório.'),
        logradouro: Yup.string()
            .trim()
            .required('O endereço é obrigatório.'),
        email: Yup.string()
            .email('O e-mail está inválido.')
            .required('O e-mail é obrigatório.'),
        cidade: Yup.string()
            .trim()
            .required('A cidade é obrigatória.'),
        bairro: Yup.string()
            .trim()
            .required('O bairro é obrigatório.'),
        cep: Yup.string()
            .trim()
            .required('O CEP é obrigatório.'),
        numero: Yup.string()
            .trim()
            .required('O número é obrigatório.'),
        uf: Yup.string()
            .trim()
            .required('O estado é obrigatório.'),
        vinculo: Yup.string()
            .required('O vínculo é obrigatório.'),
        percentual: Yup.number()
            .min(0, 'O valor percentual deve estar entre 0 e 100')
            .max(100, 'O valor percentual deve estar entre 0 e 100'),
        percentualVenda: Yup.number()
            .min(0, 'O valor percentual de venda deve estar entre 0 e 100')
            .max(100, 'O valor percentual de venda deve estar entre 0 e 100')
            .test('percentualVenda', 'O valor percentual de venda não deve ser maior que o percentual.',
                value => value <= values.percentual),
        percentualTotal: Yup.number()
            .max(100, 'O valor total do percentual não deve exceder 100'),
    })
)

export { getValidationSchema };