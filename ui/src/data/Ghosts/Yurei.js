"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Yurei = {
    codeName: 'Yurei',
    name: 'Юрэй',
    evidences: [EvidenceList_1.EvidenceORB, EvidenceList_1.EvidenceTEMP, EvidenceList_1.EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Yurei;
