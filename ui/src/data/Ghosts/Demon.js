"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Demon = {
    codeName: 'Demon',
    name: 'Демон',
    evidences: [EvidenceList_1.EvidencePRINTS, EvidenceList_1.EvidenceBOOK, EvidenceList_1.EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Demon;
