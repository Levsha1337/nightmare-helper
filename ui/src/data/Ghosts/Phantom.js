"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Phantom = {
    codeName: 'Phantom',
    name: 'Фантом',
    evidences: [EvidenceList_1.EvidenceRADIO, EvidenceList_1.EvidencePRINTS, EvidenceList_1.EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Phantom;
