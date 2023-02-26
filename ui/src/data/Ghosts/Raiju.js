"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Raiju = {
    codeName: 'Raiju',
    name: 'Райдзю',
    evidences: [EvidenceList_1.EvidenceEMF5, EvidenceList_1.EvidenceORB, EvidenceList_1.EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Raiju;
