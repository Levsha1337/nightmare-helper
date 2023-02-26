"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EvidenceList_1 = __importStar(require("./EvidenceList"));
const GhostList_1 = __importDefault(require("./GhostList"));
const Mimic_1 = __importDefault(require("./Ghosts/Mimic"));
class GhostListTools {
    static calculatePossibleGhosts(evidences, maxCount) {
        if (evidences.length === 0) {
            return GhostList_1.default;
        }
        return GhostList_1.default.filter((ghost) => ghost.resolve(ghost, evidences, maxCount));
    }
    static calculatePossibleEvidences(evidences, maxCount) {
        // все призраки подходящие по уликам
        const ghosts = GhostListTools.calculatePossibleGhosts(evidences, maxCount);
        // если улик больше чем позволяет сложность
        if (evidences.length > maxCount) {
            // и среди доступных призраков есть мимик
            if (ghosts.find(gh => gh.codeName === Mimic_1.default.codeName)) {
                // то возвращаем улики по мимику
                return evidences;
            }
            else {
                // иначе мем смешной а ситуация страшная
                return [];
            }
        }
        const possibleCodes = [];
        ghosts.forEach(gh => {
            // если уже достигнут лимит по уликам
            if (maxCount === evidences.length) {
                // и призрак - не мимик, то доступны только уже выбранные улики
                if (gh.codeName !== Mimic_1.default.codeName) {
                    return possibleCodes.push(...evidences.map(ev => ev.code));
                }
                else {
                    // в ином случае возвращаем улики мимика
                    if (evidences.find(ev => ev.code === EvidenceList_1.EvidenceORB.code)) {
                        // если орб уже выбран то возвращаем все улики мимика, т.к. для него доступна ещё одна - орб не считается
                        return possibleCodes.push(...Mimic_1.default.evidences.map(ev => ev.code));
                    }
                    else {
                        // если орб ещё не выбран то возвращаем выбранные + орб
                        return possibleCodes.push(EvidenceList_1.EvidenceORB.code, ...evidences.map(ev => ev.code));
                    }
                }
            }
            // сюда попадаем если лимит по уликам ещё не достигнут
            possibleCodes.push(...gh.evidences.map(ev => ev.code));
        });
        const possibleEvidencesCodes = [...new Set(possibleCodes)];
        return EvidenceList_1.default.filter(ev => possibleEvidencesCodes.includes(ev.code));
    }
    static calculateModifiersAffect(ghost, modifiers) {
        let amount = 0;
        if (!ghost.modifiersAffect) {
            return amount;
        }
        modifiers.forEach(modifier => amount += (ghost.modifiersAffect[modifier.code] || 0));
        return amount;
    }
}
exports.default = GhostListTools;
