"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByCode = exports.compareEvidenceCode = exports.compareEvidence = exports.EvidenceTEMP = exports.EvidenceRADIO = exports.EvidenceBOOK = exports.EvidenceORB = exports.EvidencePRINTS = exports.EvidenceDOTS = exports.EvidenceEMF5 = void 0;
exports.EvidenceEMF5 = {
    code: 'EMF5',
    name: 'ЭМП ур.5',
    imageLink: 'assets/sprite_EMF5.webp'
};
exports.EvidenceDOTS = {
    code: 'DOTS',
    name: 'Лазерный проектор',
    imageLink: 'assets/sprite_DOTS.webp'
};
exports.EvidencePRINTS = {
    code: 'PRINTS',
    name: 'Отпечатки рук',
    imageLink: 'assets/sprite_PRINTS.webp'
};
exports.EvidenceORB = {
    code: 'ORB',
    name: 'Призрачный огонёк',
    imageLink: 'assets/sprite_ORB.webp'
};
exports.EvidenceBOOK = {
    code: 'BOOK',
    name: 'Записи в блокноте',
    imageLink: 'assets/sprite_BOOK.webp'
};
exports.EvidenceRADIO = {
    code: 'RADIO',
    name: 'Радиоприёмник',
    imageLink: 'assets/sprite_RADIO.webp'
};
exports.EvidenceTEMP = {
    code: 'TEMP',
    name: 'Температура',
    imageLink: 'assets/sprite_TEMP.webp'
};
const compareEvidence = (evidence) => {
    return (ev) => {
        return ev.code === evidence.code;
    };
};
exports.compareEvidence = compareEvidence;
const compareEvidenceCode = (evidenceCode) => {
    return (ev) => {
        return ev.code === evidenceCode;
    };
};
exports.compareEvidenceCode = compareEvidenceCode;
const getByCode = (evidenceCode) => {
    switch (evidenceCode) {
        case 'EMF5':
            return exports.EvidenceEMF5;
        case 'DOTS':
            return exports.EvidenceDOTS;
        case 'PRINTS':
            return exports.EvidencePRINTS;
        case 'ORB':
            return exports.EvidenceORB;
        case 'BOOK':
            return exports.EvidenceBOOK;
        case 'RADIO':
            return exports.EvidenceRADIO;
        case 'TEMP':
            return exports.EvidenceTEMP;
    }
};
exports.getByCode = getByCode;
exports.default = [
    exports.EvidenceEMF5,
    exports.EvidenceDOTS,
    exports.EvidencePRINTS,
    exports.EvidenceORB,
    exports.EvidenceBOOK,
    exports.EvidenceRADIO,
    exports.EvidenceTEMP
];
