"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Poltergeist = {
    codeName: 'Poltergeist',
    name: 'Полтергейст',
    evidences: [EvidenceList_1.EvidenceRADIO, EvidenceList_1.EvidencePRINTS, EvidenceList_1.EvidenceBOOK],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Poltergeist;
