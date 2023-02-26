"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Myling = {
    codeName: 'Myling',
    name: 'Мюлинг',
    evidences: [EvidenceList_1.EvidenceEMF5, EvidenceList_1.EvidencePRINTS, EvidenceList_1.EvidenceBOOK],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Myling;
