"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Onryo = {
    codeName: 'Onryo',
    name: 'Онрё',
    evidences: [EvidenceList_1.EvidenceRADIO, EvidenceList_1.EvidenceORB, EvidenceList_1.EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver
};
exports.default = Onryo;
