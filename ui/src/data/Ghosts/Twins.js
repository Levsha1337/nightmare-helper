"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Twins = {
    codeName: 'Twins',
    name: 'Близнецы',
    evidences: [EvidenceList_1.EvidenceEMF5, EvidenceList_1.EvidenceRADIO, EvidenceList_1.EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Twins;
