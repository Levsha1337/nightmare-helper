"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Obake = {
    codeName: 'Obake',
    name: 'Обакэ',
    evidences: [EvidenceList_1.EvidenceEMF5, EvidenceList_1.EvidencePRINTS, EvidenceList_1.EvidenceORB],
    evidenceRequired: EvidenceList_1.EvidencePRINTS,
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Obake;
