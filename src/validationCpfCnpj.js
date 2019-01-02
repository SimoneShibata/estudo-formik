const cpfCheckSum = value => {
    const sum = value
      .split('')
      .map(num => parseInt(num, 10))
      .reduce(
        (total, current, index) => total + current * (value.length + 1 - index),
        0
      );
  
    const checkSum = (sum * 10) % 11;
  
    return checkSum > 9 ? 0 : checkSum;
  };
  
  const validateCpf = cpf =>
    !(cpf.match(/(.)\1*/gm).length === 1) &&
    parseInt(cpf[9], 10) === cpfCheckSum(cpf.substring(0, 9)) &&
    parseInt(cpf[10], 10) === cpfCheckSum(cpf.substring(0, 10));
  
  const cnpjCheckSum = value => {
    const weightStart = value.length === 12 ? 1 : 0;
    const WEIGHTS = '6543298765432'
      .substring(weightStart)
      .split('')
      .map(num => parseInt(num, 10));
  
    const sum = value
      .split('')
      .map(num => parseInt(num, 10))
      .reduce((total, current, index) => total + current * WEIGHTS[index], 0);
  
    const checkSum = sum % 11;
    return checkSum < 2 ? 0 : 11 - checkSum;
  };
  
  const validateCnpj = cnpj =>
    !(cnpj.match(/(.)\1*/gm).length === 1) &&
    parseInt(cnpj[12], 10) === cnpjCheckSum(cnpj.substring(0, 12)) &&
    parseInt(cnpj[13], 10) === cnpjCheckSum(cnpj.substring(0, 13));
  
  // eslint-disable-next-line import/prefer-default-export
  export const validateCpfCnpj = cpfCnpj => {
    if (cpfCnpj.length === 11) {
      return validateCpf(cpfCnpj);
    }
    if (cpfCnpj.length === 14) {
      return validateCnpj(cpfCnpj);
    }
    return false;
  };
  