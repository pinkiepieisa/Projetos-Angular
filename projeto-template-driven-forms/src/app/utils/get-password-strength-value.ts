import zxcvbn from 'zxcvbn';

export const getPasswordStrengthValue = (password: string): number => {

    if(!password) {
        return 0;
    }

    const result = zxcvbn(password);

    const WEAK_PASSWORD = result.score <= 1;

    const MEDIUM_PASSWORD = result.score <=3;

    if(WEAK_PASSWORD) {
        return 20;
    } else if (MEDIUM_PASSWORD) {
        return 60;
    } else {
        return 100;
    }
}

// Lógica para a barra de progresso se basear do score (força) da senha conforme ela for sendo escrita