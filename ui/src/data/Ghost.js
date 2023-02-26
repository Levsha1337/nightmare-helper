"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGhostResolver = void 0;
const EvidenceList_1 = require("./EvidenceList");
const defaultGhostResolver = (ghost, evidences, maxCount) => {
    // если улик больше чем лимит сложности или улик больше чем может быть у призрака
    if (evidences.length > maxCount || evidences.length > ghost.evidences.length) {
        // то это не этот призрак
        return false;
    }
    // если у призрака есть обязательная улика
    if (ghost.evidenceRequired) {
        // и в выбранных уликах нет этой обязательной улики
        if (!evidences.find((0, EvidenceList_1.compareEvidence)(ghost.evidenceRequired))) {
            // и выбраны все доступные на этой сложности улики
            // то это не этот призрак
            if (evidences.length === maxCount)
                return false;
        }
    }
    // проверяем нет ли улик, которых нет у призрака
    return !evidences.find((ev) => !ghost.evidences.find((0, EvidenceList_1.compareEvidence)(ev)));
};
exports.defaultGhostResolver = defaultGhostResolver;
