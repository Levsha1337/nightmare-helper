export type Evidence = {
    code: string;
    name: string;
    imageLink: string;
};

export const EvidenceEMF5: Evidence = {
    code: 'EMF5',
    name: 'ЭМП ур.5',
    imageLink: 'assets/sprite_EMF5.webp'
};

export const EvidenceDOTS: Evidence = {
    code: 'DOTS',
    name: 'Лазерный проектор',
    imageLink: 'assets/sprite_DOTS.webp'
};

export const EvidencePRINTS: Evidence = {
    code: 'PRINTS',
    name: 'Отпечатки рук',
    imageLink: 'assets/sprite_PRINTS.webp'
};

export const EvidenceORB: Evidence = {
    code: 'ORB',
    name: 'Призрачный огонёк',
    imageLink: 'assets/sprite_ORB.webp'
};

export const EvidenceBOOK: Evidence = {
    code: 'BOOK',
    name: 'Записи в блокноте',
    imageLink: 'assets/sprite_BOOK.webp'
};

export const EvidenceRADIO: Evidence = {
    code: 'RADIO',
    name: 'Радиоприёмник',
    imageLink: 'assets/sprite_RADIO.webp'
};

export const EvidenceTEMP: Evidence = {
    code: 'TEMP',
    name: 'Температура',
    imageLink: 'assets/sprite_TEMP.webp'
};

export const compareEvidence = (evidence: Evidence) => {
    return (ev: Evidence) => {
        return ev.code === evidence.code;
    };
};

export const compareEvidenceCode = (evidenceCode: string) => {
    return (ev: Evidence) => {
        return ev.code === evidenceCode;
    };
};

export const getByCode = (evidenceCode: string): Evidence => {
    switch (evidenceCode) {
        case 'EMF5':
            return EvidenceEMF5;
        case 'DOTS':
            return EvidenceDOTS;
        case 'PRINTS':
            return EvidencePRINTS;
        case 'ORB':
            return EvidenceORB;
        case 'BOOK':
            return EvidenceBOOK;
        case 'RADIO':
            return EvidenceRADIO;
        case 'TEMP':
            return EvidenceTEMP;
    }
};

export default [
    EvidenceEMF5,
    EvidenceDOTS,
    EvidencePRINTS,
    EvidenceORB,
    EvidenceBOOK,
    EvidenceRADIO,
    EvidenceTEMP
] as Evidence[];
