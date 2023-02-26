"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = require("../EvidenceList");
const Mimic = {
    codeName: 'Mimic',
    name: 'Мимик',
    evidences: [EvidenceList_1.EvidenceRADIO, EvidenceList_1.EvidencePRINTS, EvidenceList_1.EvidenceTEMP, EvidenceList_1.EvidenceORB],
    evidenceRequired: EvidenceList_1.EvidenceORB,
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: (ghost, evidences, maxCount) => {
        if (evidences.length > maxCount + 1 || evidences.length > ghost.evidences.length) {
            return false;
        }
        // if (ghost.evidenceRequired) {
        //     if (!evidences.find(compareEvidence(ghost.evidenceRequired))) {
        //         if (evidences.length === maxCount) return false;
        //     }
        // }
        return !evidences.find((ev) => !ghost.evidences.find((0, EvidenceList_1.compareEvidence)(ev)));
    }
};
exports.default = Mimic;
