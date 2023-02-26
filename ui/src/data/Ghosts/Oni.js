"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Ghost_1 = require("../Ghost");
const Oni = {
    codeName: 'Oni',
    name: 'Они',
    evidences: [EvidenceList_1.EvidenceEMF5, EvidenceList_1.EvidenceTEMP, EvidenceList_1.EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: Ghost_1.defaultGhostResolver,
    modifiersAffect: {
        'EVENT_CLOUD': -1000
    }
};
exports.default = Oni;
