"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Moroi = {
    codeName: 'Moroi',
    name: 'Морой',
    evidences: [EvidenceList_1.EvidenceRADIO, EvidenceList_1.EvidenceBOOK, EvidenceList_1.EvidenceTEMP],
    evidenceRequired: EvidenceList_1.EvidenceRADIO,
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Moroi;
